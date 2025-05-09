# CI/CD Pipeline Assignment

## Overview
This project demonstrates the implementation of a Continuous Integration/Continuous Deployment (CI/CD) pipeline using Jenkins, GitHub, and Docker. The pipeline automatically detects changes pushed to the GitHub repository, triggers a Jenkins job to build and test the application, and generates and pushes a Docker image to Docker Hub.

## Project Structure
```
cicd-pipeline-assignment
├── src
│   ├── app.js
│   ├── index.js
│   └── routes
│       └── index.js
├── test
│   └── app.test.js
├── Jenkinsfile
├── Dockerfile
├── docker-compose.yml
├── .github
│   └── workflows
│       └── main.yml
├── scripts
│   ├── build.sh
│   └── deploy.sh
├── package.json
├── .env.example
├── .gitignore
└── README.md
```

## Setup Instructions
1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/cicd-pipeline-assignment.git
   cd cicd-pipeline-assignment
   ```

2. **Install Dependencies**
   Ensure you have Node.js and npm installed. Then run:
   ```bash
   npm install
   ```

3. **Environment Variables**
   Copy the `.env.example` to `.env` and update the values as necessary.

4. **Running the Application**
   You can run the application locally using:
   ```bash
   node src/index.js
   ```

5. **Running Tests**
   To run the tests, use:
   ```bash
   npm test
   ```

## CI/CD Pipeline
- **Jenkins**: The Jenkinsfile defines the stages for building, testing, and deploying the application.
- **Docker**: The Dockerfile contains instructions to build a Docker image for the application.
- **GitHub Actions**: The workflow defined in `.github/workflows/main.yml` triggers on push events to automate the CI/CD process.

## Scripts
- **Build Script**: The `scripts/build.sh` automates the build process, including installing dependencies and running tests.
- **Deploy Script**: The `scripts/deploy.sh` automates the deployment process, pushing the Docker image to Docker Hub.

## Conclusion
This project serves as a practical example of implementing a CI/CD pipeline, showcasing the integration of various tools and technologies to streamline the development and deployment process.