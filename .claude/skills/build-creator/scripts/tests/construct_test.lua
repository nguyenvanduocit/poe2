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
  ["skill group adds a socket group with the active gem"] = function()
    engine.init()
    construct.build({
      level = 80, class = "Witch", ascendancy = "Infernalist",
      skills = { { label = "Main", gems = { "Spark 20/20" }, main = 1 } },
    })
    local groups = build.skillsTab.socketGroupList
    H.eq(#groups, 1, "one socket group")
    H.eq(groups[1].label, "Main", "label applied")
    H.eq(groups[1].gemList[1].nameSpec, "Spark", "active gem nameSpec")
    H.eq(groups[1].gemList[1].level, 20, "gem level parsed")
    H.eq(groups[1].gemList[1].quality, 20, "gem quality parsed")
  end,
}
