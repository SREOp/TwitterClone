//const { default: axios } = require('axios')
const express = require('express')
const app = express()
const Twitter = require('./api/helpers/twitter');
const twitter = new Twitter();
const port = 3000
require('dotenv').config()

//allow all url to see the data returned
app.use((req,res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})

app.get('/tweets', (req, res) => {
    const query = req.query.q;
    const count = req.query.count;
    const maxId = req.query.max_id;
    twitter.get(query, count, maxId).then((response) => {
        res.status(200).send(response.data);
    }).catch((error)=>{
        res.status(400).send(error);
    })

})

app.listen(port, () => console.log(`Twitter APP listening on port ${port}!`))