const express =require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/InterIIT')
.then(()=> console.log('connected to database'))   
.catch((error)=> console.log(error));


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader( 'Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE ,PUT')
    next();
});

const userRoutes = require('./routes/UserRoutes');
const  ProjectRoutes = require ("./routes/ProjectRoutes")
const BiddingRoutes = require ( "./routes/BiddingRoutes");

app.use( userRoutes)
app.use( ProjectRoutes)
app.use ( BiddingRoutes)
app.use((req, res, next) => next (new HttpError('Could not find this route.', 404)));

app.use((error, req, res, next) => {
    res.status(error.code || 500);
    res.json({ message: error.message || 'An unknown error occurred!' });
});


app.listen(5000 ,()=> console.log("listening to port 5000"));