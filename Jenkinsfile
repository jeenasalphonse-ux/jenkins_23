pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git branch: 'main', url: 'https://github.com/jeenasalphonse-ux/jenkins_23.git'
            }
        }

        stage('Clean Old Containers') {
            steps {
                bat '''
                docker compose down || exit 0
                docker rm -f travel-mongo || exit 0
                docker rm -f travel-backend || exit 0
                docker rm -f travel-frontend || exit 0
                '''
            }
        }

        stage('Build Images') {
            steps {
                bat 'docker compose build'
            }
        }

        stage('Run Containers') {
            steps {
                bat 'docker compose up -d'
            }
        }

        stage('Verify') {
            steps {
                bat 'docker ps'
            }
        }
    }

    post {
        success {
            echo '✅ Deployment Successful!'
        }
        failure {
            echo '❌ Build Failed!'
        }
    }
}
