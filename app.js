const express = require("express");
const mongoose = require("mongoose");
const session = require('express-session');
const app = express();
const port = 4000;

// Middleware
app.set('view engine', 'ejs');
app.use(express.static('public')); // Serve static files from the public directory
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.SESSION_SECRET || 'default_secret', // Use environment variables for sensitive information
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === 'production' } // Ensure cookies are secure in production
}));

// Routes
const indexRoutes = require('./routes/index');
const authRoutes = require('./routes/auth');
const studentRoutes = require('./routes/student');
const teacherRoutes = require('./routes/teacher');
const u1Routes = require('./routes/u1');

app.use('/', indexRoutes);
app.use('/', authRoutes);
app.use('/', studentRoutes);
app.use('/', teacherRoutes);
app.use('/', u1Routes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/School')
    .then(() => {
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    })
    .catch(error => {
        console.error("Error connecting to MongoDB:", error);
    });

module.exports = app;
