const express = require('express');
const app = require('./app');

require("dotenv").config();
port = 3000;

let server;

server = app.listen(port, () => {
    console.log(`listening to port ${port}`);
});