pipeline {
    agent any // <-- CHANGE THIS! Run on any available Jenkins agent.

    stages {
        stage('Build Docker Image') {
            steps {
                // This command will now run on the Jenkins agent itself
                sh 'docker build -t myapp:latest .'
            }
        }
        stage('Test') {
            steps {
                // The agent will run a new container from the image we just built
                sh 'docker run --rm myapp:latest npm test'
            }
        }
        stage('Deploy') {
            steps {
                // The agent will push the image
                sh 'docker push uat-machine:5000/myapp:latest'
            }
        }
    }
}
