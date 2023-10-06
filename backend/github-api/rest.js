require('dotenv').config({path:__dirname+'/.env'})
const express = require('express')
const axios = require('axios')
const cors = require('cors')
const AWS = require('aws-sdk')


const app = express()
const port = process.env.PORT || 3000

//enable CORS for all routes
app.use(cors())

//console.log(`AWS ID:, ${process.env.AWS_ACCESS_KEY_ID}`)

//Configure API to utilize AWS S3
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'us-east-1',
})


//Data fetching route
app.get('/api/data', async (req, res) => {
    try{
        //get api endpoint
        const { path } = req.query

        //s3 bucket 
        const bucketName = 'project-lsq-sales-data-2023'
        const objectKey = `${path}`;

        //fetch data
        s3.getObject({ Bucket: bucketName, Key: objectKey}, (err, data) => {
            if(err) {
                console.error('S3 Error', err)
                return res.status(500).json({error: 'Server fetch error'})
            }

            const jsonData = JSON.parse(data.Body.toString())
            res.setHeader('Content-Type', 'application/json')
            res.status(200).send(JSON.stringify(jsonData))
        })

        //RESTapi has been tested on postman
    }catch(error){
        console.error('Error', error)
        res.status(500).json({error: 'Server fetch error'})
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})