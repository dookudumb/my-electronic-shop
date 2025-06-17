pipeline {
    agent any

    environment {
        DOCKER_REGISTRY = 'uat-machine:5000'
        IMAGE_NAME = 'myapp'
        IMAGE_TAG = 'latest'
    }

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    try {
                        sh "docker build -t ${DOCKER_REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG} ."
                    } catch (error) {
                        echo "Docker build failed: ${error}"
                        throw error
                    }
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    try {
                        sh "docker run --rm ${DOCKER_REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG} npm test"
                    } catch (error) {
                        echo "Tests failed: ${error}"
                        throw error
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    try {
                        withDockerRegistry([ credentialsId: "docker-registry-creds", url: "http://${DOCKER_REGISTRY}" ]) {
                            sh "docker push ${DOCKER_REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}"
                        }
                    } catch (error) {
                        echo "Deploy failed: ${error}"
                        throw error
                    }
                }
            }
        }
    }

    post {
        failure {
            echo 'Pipeline failed! Sending notification...'
        }
        cleanup {
            sh 'docker system prune -f'
        }
    }
}