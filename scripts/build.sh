#!/bin/bash

# Navigate to the project directory
cd "$(dirname "$0")/.."

# Install dependencies
echo "Installing dependencies..."
npm install

# Run tests
echo "Running tests..."
npm test

# Build Docker image
echo "Building Docker image..."
docker build -t your-dockerhub-username/your-image-name:latest .

# Clean up
echo "Cleaning up..."
docker system prune -f

echo "Build process completed."