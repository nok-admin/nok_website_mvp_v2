#!/bin/bash

# Helper script to create GitHub repository and push code
# Usage: ./create_github_repo.sh [GITHUB_TOKEN]

set -e

REPO_NAME="nok_website_mvp_v2"
ORG="nok-admin"

# Get token from argument or environment variable
if [ -n "$1" ]; then
    GITHUB_TOKEN="$1"
elif [ -z "$GITHUB_TOKEN" ]; then
    echo "❌ GitHub token required!"
    echo ""
    echo "Usage: $0 [GITHUB_TOKEN]"
    echo "   or: GITHUB_TOKEN=your_token $0"
    echo ""
    echo "Create a token at: https://github.com/settings/tokens (scope: repo)"
    exit 1
fi

echo "🌐 Creating GitHub repository: $ORG/$REPO_NAME"

# Create repository using GitHub API (using user endpoint since nok-admin is a user account)
RESPONSE=$(curl -s -w "\n%{http_code}" -X POST \
  -H "Authorization: token $GITHUB_TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  "https://api.github.com/user/repos" \
  -d "{
    \"name\": \"$REPO_NAME\",
    \"description\": \"V2 copy of nok_website_mvp repository\",
    \"private\": false
  }")

HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
BODY=$(echo "$RESPONSE" | sed '$d')

if [ "$HTTP_CODE" -eq 201 ]; then
    echo "✅ GitHub repository created successfully!"
    
    # Add remote and push
    echo "📤 Pushing code to GitHub..."
    git remote add origin "https://github.com/$ORG/$REPO_NAME.git" 2>/dev/null || git remote set-url origin "https://github.com/$ORG/$REPO_NAME.git"
    git branch -M main
    git push -u origin main
    
    echo ""
    echo "🎉 Success! Your v2 repository is available at:"
    echo "   https://github.com/$ORG/$REPO_NAME"
else
    echo "❌ Failed to create GitHub repository."
    echo "HTTP Status: $HTTP_CODE"
    echo "Response: $BODY"
    exit 1
fi

