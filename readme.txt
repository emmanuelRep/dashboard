Overview

This Read me file contains information on how to run the dashboard effectively. 
The dashboard utilizes a REST API to fetch user data from the github repository.
The fetched data is displayed visually to the front end and its graphs. 
The data set is sorted by month and year to ensure accurate data analysis. 

Backend

The REST API was built with Express on Node.JS. It has been thoroughly tested using Postman.
The API returns data in a JSON format to the frontend. 

-To activate the api, navigate to the file directory "scalable/backend/github-api" 
-Once you are in the file directory, run the command "node rest.js" to activate the server on port: 3000.
-Please make sure that the server is kept running. 
-Logs of the server status can be found in the console.

Frontend

-The frontend is built using angular and can be run using the command "ng serve".
-The frontend should be run after the back end api has been activated.
