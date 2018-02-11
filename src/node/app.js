const express = require('express');
const bodyParser = require('body-parser');

const app = express();

var tabFilms = [
    {
        id:'1',
        titre:'Film1',
        annee:'une annee',
        langue:'fr',
        realisateur:{
            nom:'jean',
            prenom:'jacque',
            nationnalite:'fr',
            date_naissance:'3/3/3'
        },
        genre:'drame'
    },
    {
        id:'2',
        titre:'Film2',
        annee:'une annee',
        langue:'en',
        realisateur:{
            nom:'jean',
            prenom:'claude',
            nationnalite:'en',
            date_naissance:'9/3/3'
        },
        genre:'comedie'
    }
];

var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use("/dist", express.static(path.resolve("src/dist")));

app.get('/', function (req, res) {
    res.sendFile(path.resolve('index.html'));
});

app.get('/api/movies/all', function (req, res) {
    res.send(tabFilms);
});

app.get('/api/movies/:id', function (req, res) {
    res.send(File('index.html'));
});

app.post('/api/movies/:id', function (req, res) {
    res.send(File('index.html'));
});

app.post('/api/movies', function (req, res) {
    console.log(req);
    res.send("YO");
});

app.use(function(req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000.');
});