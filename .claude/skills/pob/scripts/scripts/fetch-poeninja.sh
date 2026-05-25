#!/bin/bash
# Fetch build from poe.ninja character page
# Usage: fetch-poeninja.sh <poe.ninja-url> [output-file]
#
# Example:
#   fetch-poeninja.sh https://poe.ninja/poe2/builds/vaal/character/account/CharName
#   fetch-poeninja.sh https://poe.ninja/poe2/builds/vaal/character/account/CharName build.txt

set -e

URL="$1"
OUTPUT="${2:-/dev/stdout}"

if [ -z "$URL" ]; then
    echo "Usage: fetch-poeninja.sh <poe.ninja-url> [output-file]"
    echo ""
    echo "Fetches Path of Building export code from a poe.ninja character page."
    echo ""
    echo "Examples:"
    echo "  fetch-poeninja.sh 'https://poe.ninja/poe2/builds/vaal/character/account/CharName'"
    echo "  fetch-poeninja.sh 'https://poe.ninja/poe2/builds/vaal/character/account/CharName' build.txt"
    exit 1
fi

# Extract league, account, and character name from URL
# Format: https://poe.ninja/poe2/builds/{league}/character/{account}/{character}
if [[ "$URL" =~ poe\.ninja/poe2/builds/([^/]+)/character/([^/]+)/([^/]+) ]]; then
    LEAGUE="${BASH_REMATCH[1]}"
    ACCOUNT="${BASH_REMATCH[2]}"
    CHARACTER="${BASH_REMATCH[3]}"
else
    echo "ERROR: Invalid poe.ninja URL format"
    echo "Expected: https://poe.ninja/poe2/builds/{league}/character/{account}/{character}"
    exit 1
fi

echo "League: $LEAGUE" >&2
echo "Account: $ACCOUNT" >&2
echo "Character: $CHARACTER" >&2

# Step 1: Get snapshot version from index-state
echo "Fetching snapshot version..." >&2
INDEX_STATE=$(curl -s "https://poe.ninja/poe2/api/data/index-state")

VERSION=$(echo "$INDEX_STATE" | python3 -c "
import json, sys
data = json.load(sys.stdin)
for snap in data.get('snapshotVersions', []):
    if snap.get('url') == '$LEAGUE':
        print(snap.get('version'))
        break
")

SNAPSHOT_NAME=$(echo "$INDEX_STATE" | python3 -c "
import json, sys
data = json.load(sys.stdin)
for snap in data.get('snapshotVersions', []):
    if snap.get('url') == '$LEAGUE':
        print(snap.get('snapshotName'))
        break
")

if [ -z "$VERSION" ]; then
    echo "ERROR: Could not find snapshot version for league: $LEAGUE" >&2
    exit 1
fi

echo "Snapshot version: $VERSION" >&2
echo "Snapshot name: $SNAPSHOT_NAME" >&2

# Step 2: Fetch character data
echo "Fetching character data..." >&2
CHAR_DATA=$(curl -s "https://poe.ninja/poe2/api/builds/$VERSION/character?account=$ACCOUNT&name=$CHARACTER&overview=$SNAPSHOT_NAME")

# Check for error
if echo "$CHAR_DATA" | grep -q '"status":404'; then
    echo "ERROR: Character not found" >&2
    exit 1
fi

# Step 3: Extract pathOfBuildingExport
POB_CODE=$(echo "$CHAR_DATA" | python3 -c "
import json, sys
data = json.load(sys.stdin)
pob = data.get('pathOfBuildingExport', '')
if pob:
    print(pob)
else:
    sys.exit(1)
")

if [ -z "$POB_CODE" ]; then
    echo "ERROR: No Path of Building export found in character data" >&2
    exit 1
fi

# Output
if [ "$OUTPUT" = "/dev/stdout" ]; then
    echo "$POB_CODE"
else
    echo "$POB_CODE" > "$OUTPUT"
    echo "Saved to: $OUTPUT" >&2
fi

echo "Done! PoB code length: ${#POB_CODE} characters" >&2
