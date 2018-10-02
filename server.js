const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 8080;
app.use(express.static(__dirname + '/public'));

//express hbs engine

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs')



app.get('/', (req, res) => {


    res.render('home', {
        name: 'jOsE',
    });
});

app.get('/about', (req, res) => {


    res.render('about');
});

app.listen(port, () => {
    console.log(`listen petitions at the port ${port}`);
});