const express = require('express');
const bodyParser = require('body-parser')
const mysql = require('mysql');
const path = require('path');
const connection = require('./connection');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// todo routes

app.listen(8081, function () {
    console.log('http://127.0.0.1:8081/');
});
