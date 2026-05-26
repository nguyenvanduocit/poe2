-- build-creator CLI. Run via run.sh (sets cwd = pob src + LUA paths).
local SCRIPT_DIR = (arg and arg[0] or ""):match("(.*/)") or "./"
package.path = SCRIPT_DIR .. "?.lua;" .. SCRIPT_DIR .. "lib/?.lua;" .. package.path

local function die(msg) io.stderr:write(msg .. "\n"); os.exit(1) end

local cmd = arg[1]
if cmd == "test" then
  dofile(SCRIPT_DIR .. "tests/all.lua")
  return
end

die("usage: run.sh test    (more commands land in later tasks)")
