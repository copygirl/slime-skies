#!/bin/sh
# This script creates a MultiMC compatible .zip file at $OUTPUT.
# Included are: - All files within the include folder.
#               - The world_template folder as a default save.
# Due to the limitations of the zip command this is not straight-forward.
OUTPUT="build/Slime Skies.zip"
FULLNAME=$(readlink -f "$OUTPUT")

# Create a temporary directory.
TMPDIR=$(mktemp -d)
# Create directory structure in two separate subfolders here.
mkdir -p "$TMPDIR/0"
mkdir -p "$TMPDIR/1/Slime Skies/.minecraft/saves"

# Set up symlinks for the include and world_template folders.
# The world template will be placed in the instance's saves folder.
ln -s "$(readlink -f include)" "$TMPDIR/0/Slime Skies"
ln -s "$(readlink -f world_template)" "$TMPDIR/1/Slime Skies/.minecraft/saves/Slime Skies"

mkdir -p "$(dirname "$OUTPUT")" # Create output folder if it doesn't exist.
rm -f "$OUTPUT"                 # Delete previous .zip file if it exists.
# Create the .zip file with the contents of the two subfolders as its contents.
cd "$TMPDIR/0" && zip -r "$FULLNAME" *
cd "$TMPDIR/1" && zip -r "$FULLNAME" *

# Clear up temporary directory.
rm -rf "$TMPDIR"
