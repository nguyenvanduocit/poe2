local H = require("tests.helper")
local engine = require("engine")
local construct = require("construct")
return {
  ["class+ascendancy+level applied from spec"] = function()
    engine.init()
    construct.build({ level = 80, class = "Witch", ascendancy = "Infernalist" })
    H.eq(build.spec.curClassName, "Witch", "class set")
    H.eq(build.characterLevel, 80, "level set")
    H.eq(build.spec.curAscendClassName, "Infernalist", "ascendancy set")
  end,
  ["unknown class raises"] = function()
    engine.init()
    local ok = pcall(function() construct.build({ level = 1, class = "Notaclass" }) end)
    H.eq(ok, false, "unknown class errors")
  end,
}
