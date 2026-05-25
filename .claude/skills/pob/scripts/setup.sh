#!/bin/bash
# POB2 Setup Script
# This script sets up Path of Building 2 for headless CLI usage

set -e

SKILL_DIR="$(cd "$(dirname "$0")" && pwd)"
POB2_DIR="$SKILL_DIR/pob"
POB2_REPO="https://github.com/PathOfBuildingCommunity/PathOfBuilding-PoE2.git"

echo "=== POB2 CLI Setup ==="
echo "Skill directory: $SKILL_DIR"

# Check if POB2 already exists
if [ -d "$POB2_DIR" ]; then
    echo "POB2 already exists at $POB2_DIR"
    echo "To reinstall, remove the directory first: rm -rf $POB2_DIR"
    exit 0
fi

# Check dependencies
echo ""
echo "Checking dependencies..."

if ! command -v luajit &> /dev/null; then
    echo "ERROR: luajit not found. Install with: brew install luajit"
    exit 1
fi
echo "  - luajit: OK"

if ! command -v luarocks &> /dev/null; then
    echo "ERROR: luarocks not found. Install with: brew install luarocks"
    exit 1
fi
echo "  - luarocks: OK"

if ! command -v git &> /dev/null; then
    echo "ERROR: git not found"
    exit 1
fi
echo "  - git: OK"

# Clone POB2
echo ""
echo "Cloning POB2..."
git clone --depth 1 "$POB2_REPO" "$POB2_DIR"

# Install lua-zlib
echo ""
echo "Installing lua-zlib..."
luarocks install lua-zlib --lua-version=5.1

# Patch HeadlessWrapper.lua with zlib support
echo ""
echo "Patching HeadlessWrapper.lua..."

WRAPPER_FILE="$POB2_DIR/src/HeadlessWrapper.lua"

# Create the patch
cat > /tmp/headless-zlib-patch.lua << 'PATCH'
-- Load zlib for compression/decompression
local zlibOk, zlib = pcall(require, "zlib")
if not zlibOk then
	zlib = nil
end

function Deflate(data)
	if zlib then
		return zlib.deflate()(data, "finish")
	end
	return ""
end
function Inflate(data)
	if zlib then
		local stream = zlib.inflate()
		local result, eof, bytesIn, bytesOut = stream(data)
		return result or ""
	end
	return ""
end
PATCH

# Replace the stub functions in HeadlessWrapper.lua
if grep -q "function Deflate(data)" "$WRAPPER_FILE"; then
    # Create a sed-compatible replacement
    python3 << PYSCRIPT
import re

with open("$WRAPPER_FILE", "r") as f:
    content = f.read()

# Pattern to match the stub functions
pattern = r'function Deflate\(data\)\s*\n\s*-- TODO: Might need this\s*\n\s*return ""\s*\nend\s*\nfunction Inflate\(data\)\s*\n\s*-- TODO: And this\s*\n\s*return ""\s*\nend'

replacement = '''-- Load zlib for compression/decompression
local zlibOk, zlib = pcall(require, "zlib")
if not zlibOk then
	zlib = nil
end

function Deflate(data)
	if zlib then
		return zlib.deflate()(data, "finish")
	end
	return ""
end
function Inflate(data)
	if zlib then
		local stream = zlib.inflate()
		local result, eof, bytesIn, bytesOut = stream(data)
		return result or ""
	end
	return ""
end'''

new_content = re.sub(pattern, replacement, content)

with open("$WRAPPER_FILE", "w") as f:
    f.write(new_content)

print("Patched successfully")
PYSCRIPT
fi

# Copy CLI script
echo ""
echo "Setting up CLI..."
cp "$SKILL_DIR/scripts/pob-cli.sh" "$POB2_DIR/pob-cli.sh"
chmod +x "$POB2_DIR/pob-cli.sh"

# Test
echo ""
echo "Testing installation..."
cd "$POB2_DIR"
./pob-cli.sh new 2>&1 | head -5

echo ""
echo "=== Setup Complete ==="
echo ""
echo "Usage:"
echo "  $POB2_DIR/pob-cli.sh new              # Create empty build"
echo "  $POB2_DIR/pob-cli.sh calc <pob-code>  # Analyze build"
echo "  $POB2_DIR/pob-cli.sh calc @file.txt   # Load from file"
echo ""
echo "To fetch builds from poe.ninja, use:"
echo "  $SKILL_DIR/scripts/fetch-poeninja.sh <url>"
