
#!/bin/bash

# Build the project for production
echo "Building project for production..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "Build successful! 🎉"
    echo "You can now test the build locally by running: npm run preview"
    echo "Or push to GitHub to trigger automatic deployment to GitHub Pages"
else
    echo "Build failed! ❌"
    echo "Please fix the build errors before deploying"
    exit 1
fi
