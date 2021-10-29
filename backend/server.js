const express       = require('express');
const mongoose      = require('mongoose');
const cors          = require('cors')
const secrets       = require('./secrets');
const cookieParser  = require('cookie-parser');

// ALL ROUTES NEED EMAIL / USERNAME VERIFICATION FUNCTION //
// JWT NEEDS EXPIRATION / REFRESH FUNCTION //
// ALL PROTECTED ROUTES NEED JWT AUTH MIDDLEWARE FUNCTION //

const app = express();
app.use(cors({ origin: true, credentials: true}));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cookieParser());
const PORT = 3002;

// ROUTES //
const authRoutes = require('./routes/Auth');
const userData = require('./routes/GetData');
const postData = require('./routes/PostData');
app.use('/post', postData);
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