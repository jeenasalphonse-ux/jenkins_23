pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                url: 'https://github.com/jeenasalphonse-ux/travel_pp.git'
            }
        }

        stage('Check Docker') {
            steps {
                sh 'docker --version || true'
            }
        }

        stage('Build (Safe Mode)') {
            steps {
                sh 'echo "Docker build skipped for now - environment setup needed"'
            }
        }

        stage('Deploy (Safe Mode)') {
            steps {
                sh 'echo "Deployment skipped for now"'
            }
        }
    }
}
