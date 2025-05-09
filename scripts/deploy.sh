#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Variables
DOCKER_IMAGE_NAME="your-dockerhub-username/your-image-name"
DOCKER_IMAGE_TAG="latest"

# Build the Docker image
echo "Building the Docker image..."
docker build -t $DOCKER_IMAGE_NAME:$DOCKER_IMAGE_TAG .

# Log in to Docker Hub
echo "Logging in to Docker Hub..."
echo "$DOCKER_HUB_PASSWORD" | docker login -u "$DOCKER_HUB_USERNAME" --password-stdin

# Push the Docker image to Docker Hub
echo "Pushing the Docker image to Docker Hub..."
docker push $DOCKER_IMAGE_NAME:$DOCKER_IMAGE_TAG

# Deployment steps can be added here (e.g., SSH into a server and pull the new image)
# echo "Deploying the application..."
# ssh user@your-server "docker pull $DOCKER_IMAGE_NAME:$DOCKER_IMAGE_TAG && docker-compose up -d" 

echo "Deployment completed successfully."