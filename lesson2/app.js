const express = require('express');
const expressHbs = require('express-handlebars');
const path = require('path');


const {PORT} = require('./configs/config');
const users = require('./dataBase/users');

const app = express();
const staticPath = path.join(__dirname, 'static');
  

app.use(express.json());
app.use(express.urlencoded ({extended: true}));
app.use(express.static(staticPath));
app.set('view engine', '.hbs');
app.engine('.hbs', expressHbs({ defaultLayout: false }));
app.set('views', staticPath);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/ping', (req, res) => {  });

app.post('/auth', (req, res) => {
    const { name, password } = req.body;
    
    const user = users.find(user => user.name === name);

    if(!user) {
        res.status(404).end('User not found')
        return;
    }

    res.json(user);

});


app.get('/users/:user_id', (req, res) => {
    const { user_id } = req.params;
    const query = req.query;

    console.log(query);

    res.json(user_id);


    });

// Render endpoints
app.get('/login', (req, res) => {
    res.render('login');

})

app.get('/users', (req, res) => {
    res.render('users', {userName: "Viktor", users, isMale: true });
});

let server = app.listen(PORT, () => {
    console.log('App listen', PORT)
});

