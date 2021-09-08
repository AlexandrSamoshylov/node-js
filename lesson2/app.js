const express = require('express');
const expressHbs = require('express-handlebars');


const {PORT} = require('./configs/config');
const users = require('./dataBase/users');
const path = require("path");

const app = express();

app.set('view engine', '.hbs');
app.engine('.hbs', expressHbs({ defaultLayout: false }));
spp.set('views', path.join(__dirname, 'static'));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/ping', (req, res) => {
  });
app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:user_id', (req, res) => {
    const { user_id } = req.params;
    const query = req.query;

    console.log(query);

    res.json(user_id);


    });

let server = app.listen(PORT, () => {
    console.log('App listen', PORT)
});