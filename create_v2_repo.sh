#!/bin/bash

# Script to create a v2 copy of nok_website_mvp repository on GitHub

set -e

REPO_NAME="nok_website_mvp_v2"
ORG="nok-admin"
PARENT_DIR="/Users/sam"
NEW_REPO_DIR="$PARENT_DIR/$REPO_NAME"
CURRENT_DIR="/Users/sam/nok_website_mvp"

echo "🚀 Creating v2 repository..."

# Step 1: Create new directory and copy files
echo "📁 Copying files to new directory..."
if [ -d "$NEW_REPO_DIR" ]; then
    echo "⚠️  Directory $NEW_REPO_DIR already exists. Removing it..."
    rm -rf "$NEW_REPO_DIR"
fi

mkdir -p "$NEW_REPO_DIR"

# Copy all files except .git and node_modules
rsync -av --exclude='.git' --exclude='node_modules' --exclude='.next' "$CURRENT_DIR/" "$NEW_REPO_DIR/"

# Step 2: Initialize git repository
echo "🔧 Initializing git repository..."
cd "$NEW_REPO_DIR"
git init
git add .
git commit -m "Initial commit: v2 copy of nok_website_mvp"

# Step 3: Create GitHub repository
echo "🌐 Creating GitHub repository..."

# Check if GITHUB_TOKEN is set
if [ -z "$GITHUB_TOKEN" ]; then
    echo ""
    echo "⚠️  GITHUB_TOKEN environment variable is not set."
    echo "Please provide your GitHub Personal Access Token:"
    echo ""
    echo "You can create one at: https://github.com/settings/tokens"
    echo "Required scopes: repo"
    echo ""
    read -sp "Enter your GitHub token: " GITHUB_TOKEN
    echo ""
fi

# Create repository using GitHub API
RESPONSE=$(curl -s -w "\n%{http_code}" -X POST \
  -H "Authorization: token $GITHUB_TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  "https://api.github.com/orgs/$ORG/repos" \
  -d "{
    \"name\": \"$REPO_NAME\",
    \"description\": \"V2 copy of nok_website_mvp repository\",
    \"private\": false
  }")

HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
BODY=$(echo "$RESPONSE" | sed '$d')

if [ "$HTTP_CODE" -eq 201 ]; then
    echo "✅ GitHub repository created successfully!"
    
    # Step 4: Add remote and push
    echo "📤 Pushing code to GitHub..."
    git remote add origin "https://github.com/$ORG/$REPO_NAME.git"
    git branch -M main
    git push -u origin main
    
    echo ""
    echo "🎉 Success! Your v2 repository is available at:"
    echo "   https://github.com/$ORG/$REPO_NAME"
else
    echo "❌ Failed to create GitHub repository."
    echo "HTTP Status: $HTTP_CODE"
    echo "Response: $BODY"
    echo ""
    echo "The local repository has been created at: $NEW_REPO_DIR"
    echo ""
    echo "You can manually create the GitHub repository at:"
    echo "   https://github.com/organizations/$ORG/repositories/new"
    echo ""
    echo "Then run these commands:"
    echo "   cd $NEW_REPO_DIR"
    echo "   git remote add origin https://github.com/$ORG/$REPO_NAME.git"
    echo "   git branch -M main"
    echo "   git push -u origin main"
    exit 1
fi

