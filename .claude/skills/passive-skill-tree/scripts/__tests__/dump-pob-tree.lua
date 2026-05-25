-- Dump a PoB tree.lua node universe to compact JSON, for cross-checking the poedb mirror + our
-- adjacency logic against PoB's canonical (GGG-derived) tree. PoB keys nodes by number; we emit
-- them as strings so they line up with the poedb JSON (which keys by string).
-- Usage: luajit dump-pob-tree.lua <path-to-tree.lua>
local path = arg[1]
local t = dofile(path)

local function esc(s)
  return tostring(s):gsub('\\', '\\\\'):gsub('"', '\\"'):gsub('\n', '\\n')
end

local function arrJSON(a)
  if not a then return "null" end
  local parts = {}
  for _, v in ipairs(a) do parts[#parts + 1] = '"' .. esc(v) .. '"' end
  return "[" .. table.concat(parts, ",") .. "]"
end

local out = {}
out[#out + 1] = '{"nodes":{'
local first = true
for id, node in pairs(t.nodes) do
  if type(node) == "table" then
    if not first then out[#out + 1] = "," end
    first = false
    local csi = "null"
    if type(node.classStartIndex) == "number" then csi = tostring(node.classStartIndex) end
    out[#out + 1] = '"' .. esc(id) .. '":{'
      .. '"name":' .. (node.name and ('"' .. esc(node.name) .. '"') or "null")
      .. ',"isNotable":' .. (node.isNotable and "true" or "false")
      .. ',"isKeystone":' .. (node.isKeystone and "true" or "false")
      .. ',"isJewelSocket":' .. (node.isJewelSocket and "true" or "false")
      .. ',"isAscendancyStart":' .. (node.isAscendancyStart and "true" or "false")
      .. ',"ascendancyName":' .. (node.ascendancyName and ('"' .. esc(node.ascendancyName) .. '"') or "null")
      .. ',"classStartIndex":' .. csi
      .. ',"out":' .. arrJSON(node.out)
      .. ',"in":' .. arrJSON(node["in"])
      .. '}'
  end
end
out[#out + 1] = "}}"
io.write(table.concat(out))
