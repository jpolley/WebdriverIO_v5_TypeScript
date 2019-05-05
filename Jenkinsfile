pipeline {
   agent {
     docker {
       image 'circleci/node:10.12-browsers'
     }

   }
   stages {
     stage('Build') {
       steps {
         sh 'npm install'
       }
     }
     stage('Test') {
       steps {
         sh 'npm test'
       }
     }
   }
   post {
     always {
       script {
         allure([
           includeProperties: false,
           jdk: '',
           properties: [],
           reportBuildPolicy: 'ALWAYS',
           results: [[path: 'target/allure-results']]
         ])
       }
     }
   }
 }
