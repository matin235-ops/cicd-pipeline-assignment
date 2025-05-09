pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    // Pull the latest code from the repository
                    checkout scm
                    
                    // Install dependencies
                    sh 'npm install'
                    
                    // Build the Docker image
                    sh 'docker build -t your-dockerhub-username/your-app-name:latest .'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Run tests
                    sh 'npm test'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Push the Docker image to Docker Hub
                    sh 'docker push your-dockerhub-username/your-app-name:latest'
                    
                    // Optionally, run deployment script
                    sh './scripts/deploy.sh'
                }
            }
        }
    }

    post {
        always {
            // Clean up Docker images
            sh 'docker rmi your-dockerhub-username/your-app-name:latest || true'
        }
    }
}