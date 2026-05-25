-- POB2 headless verify driver.
-- Run with cwd = POB2 src dir: `luajit <abs>/verify.lua <xml-file>`
-- Loads a build from raw XML (no zlib needed) and prints calc'd stats as JSON
-- on a single line prefixed with ##STATS## so the caller can grep past PoB's
-- startup chatter.

local xmlPath = assert(arg and arg[1], "verify.lua: missing xml file path arg")

dofile("HeadlessWrapper.lua")

local f = assert(io.open(xmlPath, "r"), "verify.lua: cannot open " .. xmlPath)
local xml = f:read("*a")
f:close()

loadBuildFromXML(xml, "verify")

local o = build.calcsTab and build.calcsTab.mainOutput or {}
local function num(k)
  local v = o[k]
  if type(v) ~= "number" then return "0" end
  return string.format("%.6g", v)
end

local keys = { "Life", "EnergyShield", "Mana", "TotalDPS", "CombinedDPS", "FullDPS", "TotalEHP" }
local parts = {}
for _, k in ipairs(keys) do
  parts[#parts + 1] = '"' .. k .. '":' .. num(k)
end
io.write("##STATS##{" .. table.concat(parts, ",") .. "}\n")
