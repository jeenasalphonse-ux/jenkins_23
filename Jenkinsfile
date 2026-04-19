pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/jeenasalphonse-ux/travel_pp.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Building Travel App...'
            }
        }

        stage('Test') {
            steps {
                echo 'Running Tests...'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploy Step (you can add Docker later)'
            }
        }
    }
}
