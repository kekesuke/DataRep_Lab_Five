const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const bodyParser = require('body-parser')

// parse a body of http request
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//app.get listening for http get request at the url in '' 
app.get('/', (req, res) => {
    //once recieve the get request it sending a response with some text to the page
    res.send('Welcome to Data Representation & Query!')
})
//app.get listening for http get request at the url in '' 
app.get('/hello/:name', (req, res) => {
    //once recieve the get request. The server makes request 
    //gettings the params is a parameters whose values are set dynamically in a page’s URL.
    //the server send Hello + whatever params has been entered;
    res.send('Hello ' + req.params.name)
})

//app.get listening for http get request at the url in '' 
app.get('/api/movies', (req, res) => {
    const mymovies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
    ];
    //after the app recieve the get request it is sending a json response to the webpage;
    res.json({ movies: mymovies })
});

//app.get listening for http get request at the url in '' 
app.get('/test', (req, res) => {
    //after the app recieve the get request it is sending a file as a response to the webpage;   
    res.sendFile(__dirname + '/index.html')
})

//app.get listening for http get request at the url in '' 
app.get('/name', (req, res) => {
    //get request send data as a part of the url and we can accsess it using request
    res.send('Hello' +' ' + req.query.fname +' ' +req.query.lname );
})

//app.get listening for http get request at the url in '' 
app.post('/name', (req, res) => {
    //sending the data as a part of the body of the http request
    res.send('Hello ' + req.body.fname + ' ' +req.body.lname)
})

//listening at port 3000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})