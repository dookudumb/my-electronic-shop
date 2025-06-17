pipeline {
    agent {
        docker {
            image 'node:18' // Use a Docker image (adjust for your stack)
        }
    }
    stages {
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t myapp:latest .'
            }
        }
        stage('Test') {
            steps {
                sh 'docker run --rm myapp:latest npm test'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker push uat-machine:5000/myapp:latest'
            }
        }
    }
}
