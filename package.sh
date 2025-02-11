#!/bin/zsh

echo "Cleaning up old build files..."

# Function to remove directories or files if they exist
remove_item() {
    if [ -e "$1" ]; then
        echo "Removing $1..."
        rm -rf "$1"
    else
        echo "$1 does not exist."
    fi
}

# Remove build and dist folders if they exist
remove_item "build"
remove_item "dist"
remove_item "package/build"
remove_item "package/dist"
remove_item "package/src/themes"
remove_item "package/src/types"

# Remove specific file and folder for rgx-theme
remove_item "src/module/themes/rgx-theme/rgx-theme-combined.css"
remove_item "src/module/themes/rgx-theme/minified"

# Run merge-css.ts and minified-css.ts using ts-node
echo "Running merge-css.ts..."
npx ts-node scripts/merge-css.ts

echo "Running minified-css.ts..."
npx ts-node scripts/minified-css.ts

mkdir -p package/src/themes
mkdir -p package/src/types

# Copy files from /src/module/themes and /src/module/types to /package/src
echo "Copying /src/module/themes to /package/src/themes..."
cp -r src/module/themes/* package/src/themes/

echo "Copying /src/module/types to /package/src/types..."
cp -r src/module/types/* package/src/types/

# Run yarn build in the root directory
echo "Running yarn build in the root directory..."
yarn run build
yarn run deploy

# Go into the /package directory and run yarn build there
echo "Running yarn build in the /package directory..."
cd package
yarn run build