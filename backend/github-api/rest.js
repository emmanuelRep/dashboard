const express = require('express')
const axios = require('axios')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

//enable CORS for all routes
app.use(cors())

//Data fetching route
app.get('/api/data', async (req, res) => {
    try{
        //get api endpoint
        const { path } = req.query
        const rawGitUrl = `https://raw.githubusercontent.com/emmanuelRep/insights-dashboard-interview/main/src/app/dashboard/dashboard-components/${path}`

        const gitResponse = await axios.get(rawGitUrl)
        
        const jsonData = JSON.stringify(gitResponse.data)


        res.setHeader('Content-Type', 'application/json')
        

        
        res.status(200).send(jsonData)

        //RESTapi has been tested on postman
    }catch(error){
        console.error('Error', error)
        res.status(500).json({error: 'Server fetch error'})
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})