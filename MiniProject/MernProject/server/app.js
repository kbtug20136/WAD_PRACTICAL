const dotenv = require('dotenv');

const express = require('express');
const app = express();



dotenv.config({path:'./config.env'});
require('./db/conn');

app.use(express.json());

app.use(require('./router/auth'));

const PORT = process.env.PORT;

app.use(express.json());

//Middleware

const middleware = (req, res, next) => {
    console.log('Hello from Middleware');
    next();
}


app.get('/about', middleware, (req, res)=>{
    console.log('Hellow World from the server')
    res.send('Hello About World from the server');
});

app.get('/contact', (req, res)=>{
    res.send('Hello Contact World from the server');
});
app.get('/Product', (req, res)=>{
    res.send('Hello Contact World from the server');
});
app.get('/Signup', (req, res)=>{
    res.send('Hello Contact World from the server');
});

app.listen(PORT, ()=>{
    console.log('server is running at ' + PORT);
})