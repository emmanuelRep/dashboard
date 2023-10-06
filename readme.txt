Overview

This Read Me file contains information on how to run the dashboard effectively. 
The dashboard utilizes a REST API to fetch user data from AWS S3 to ensure data transfer security.
The fetched data is displayed visually on the front end and its graphs. 
The data set is sorted by month and year to ensure accurate data analysis. 

Backend

The REST API was built with Express on Node.JS. It has been thoroughly tested using Postman.
The API returns data in a JSON format from AWS to the front end. I have created an AWS IAM user specifically for accessing the s3 bucket containing the data. 

-Aws-SDK can be installed via npm using the command "npm install aws-sdk".
-The API requires an accessKeyId, and secretAccessKey to retrieve data from AWS. The keys are provided via environment variables (.env) which have been omitted through a .gitignore for security purposes. I have emailed them to you privately.

This is the syntax for the .env file that should be located in the same file path as "rest.js"

AWS_ACCESS_KEY_ID=keyValue
AWS_SECRET_ACCESS_KEY=keyValue

-Once the .env variables have been added, navigate to the file directory "scalable/backend/github-api/rest.js" 
-To activate the API;
 
-Run the command "node rest.js" to activate the server on port: 3000.
-Please make sure that the server is kept running. 
-Logs of the server status can be found in the console.

Frontend

-The front end is built using angular and can be run using the command "ng serve".
-The front end should be run after the back-end API has been activated.
