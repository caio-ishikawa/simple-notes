const express   = require('express');
const mongoose  = require('mongoose');
const cors      = require('cors')

const app = express();
const PORT = 3002;


app.listen(PORT, () => {
    console.log('server is running on port: ' + PORT);
})