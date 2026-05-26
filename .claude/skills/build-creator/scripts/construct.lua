-- JSON spec → loaded PoB build object, using PoB's own object API.
local engine = require("engine")
local construct = {}

local function ascendIdByName(name)
  for ascendId, asc in pairs(build.spec.curClass.classes) do
    if asc.name == name then return ascendId end
  end
  return nil
end

-- Build the full character from a decoded spec table. Returns nothing; the
-- result lives in the global `build`. Raises on any unresolved name.
function construct.build(spec)
  engine.newBuild()

  engine.selectClass(spec.class)

  if spec.ascendancy and spec.ascendancy ~= "" then
    local aid = ascendIdByName(spec.ascendancy)
    if not aid then
      error("construct: unknown ascendancy '" .. spec.ascendancy
        .. "' for class '" .. spec.class .. "'")
    end
    build.spec:SelectAscendClass(aid)
  end

  if spec.level then engine.setLevel(spec.level) end

  -- skills / items / tree are layered in by later tasks.

  engine.commit()
  engine.assertClass(spec.class)
end

return construct
