
#!/bin/bash

set -e

echo "🚀 Starting deployment process..."

# Check if we're in a git repository
if [ ! -d ".git" ]; then
  echo "❌ Error: Not in a git repository"
  exit 1
fi

# Check if there are uncommitted changes
if ! git diff-index --quiet HEAD --; then
  echo "⚠️  Warning: You have uncommitted changes"
  read -p "Do you want to continue? (y/N): " -n 1 -r
  echo
  if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Deployment cancelled"
    exit 1
  fi
fi

echo "📦 Installing dependencies..."
npm ci

echo "🏗️  Building the project..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
  echo "❌ Error: Build failed - dist directory not found"
  exit 1
fi

echo "🌐 Deploying to gh-pages branch..."
npx gh-pages -d dist --dotfiles

if [ $? -eq 0 ]; then
  echo "✅ Deployment successful!"
  echo "🌍 Your site should be available at: https://ajuhia.github.io/juhi-portfolio/"
  echo ""
  echo "📋 Next steps:"
  echo "1. Go to your GitHub repository settings"
  echo "2. Navigate to 'Pages' section"
  echo "3. Ensure source is set to 'Deploy from a branch'"
  echo "4. Select 'gh-pages' branch and '/ (root)' folder"
  echo "5. Wait a few minutes for the site to be live"
else
  echo "❌ Deployment failed"
  exit 1
fi

