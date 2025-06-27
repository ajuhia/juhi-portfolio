
#!/bin/bash

# Build the project
npm run build

# Deploy to gh-pages branch
npx gh-pages -d dist

echo "Deployment complete! Your site should be available at https://ajuhia.github.io/juhi-portfolio/"
