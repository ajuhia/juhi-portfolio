
# GitHub Pages Deployment Setup Guide

This guide will help you set up GitHub Pages deployment for your portfolio.

## Prerequisites

1. Your code should be pushed to a GitHub repository
2. The repository should be named `juhi-portfolio` or update the base path in `vite.config.ts`

## Repository Setup Steps

### 1. Enable GitHub Pages

1. Go to your GitHub repository: `https://github.com/ajuhia/juhi-portfolio`
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **Deploy from a branch**
5. Choose **gh-pages** branch and **/ (root)** folder
6. Click **Save**

### 2. Set Repository Permissions

1. In your repository settings, go to **Actions** → **General**
2. Under **Workflow permissions**, select **Read and write permissions**
3. Check **Allow GitHub Actions to create and approve pull requests**
4. Click **Save**

## Deployment Methods

### Method 1: Automatic Deployment (Recommended)

The GitHub Actions workflow will automatically deploy your site when you push to the main branch.

1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Check the **Actions** tab to monitor deployment progress
4. Your site will be available at: `https://ajuhia.github.io/juhi-portfolio/`

### Method 2: Manual Deployment

You can also deploy manually using the provided script:

```bash
# Make the script executable (first time only)
chmod +x deploy.sh

# Run the deployment
./deploy.sh
```

## Troubleshooting

### If the gh-pages branch is not created:

1. Try manual deployment first: `./deploy.sh`
2. Check if you have write permissions to the repository
3. Ensure the repository name matches the base path in `vite.config.ts`

### If the site shows a blank page:

1. Check the browser console for errors
2. Verify the base path in `vite.config.ts` matches your repository name
3. Ensure all assets are loading correctly

### If GitHub Actions fails:

1. Check the Actions tab for error details
2. Verify repository permissions are set correctly
3. Make sure the workflow file is in `.github/workflows/deploy.yml`

## Verification

Once deployed, your site should be accessible at:
`https://ajuhia.github.io/juhi-portfolio/`

The deployment typically takes 2-10 minutes to become live after a successful push.

