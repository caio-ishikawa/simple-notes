const express   = require('express');
const mongoose  = require('mongoose');
const cors      = require('cors')
const secrets   = require('./secrets');

const app = express();
app.use(cors({ origin: true, credentials: true}));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
const PORT = 3002;

// ROUTES //
const authRoutes = require('./routes/Auth');
const userData = require('./routes/GetData');
app.use('/auth', authRoutes);
app.use('/user', userData);

// DATABASE CONNECTION //
mongoose.connect(secrets, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to DB");
    }
})

// SERVER LISTEN //
app.listen(PORT, () => {
    console.log('Server running on port: ' + PORT);
});