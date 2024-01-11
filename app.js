const express=require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const appRoutes=require('./routes/routes');

// Crreate an express app
const app = express();

//Connect to mongodb
const dbURI='mongodb+srv://admin:test1234@atlascluster.3daymde.mongodb.net/fetungodb?retryWrites=true&w=majority';
mongoose.connect(dbURI)
.then((result)=>app.listen(3000))
.catch((err)=> console.log(err));

// Register view engine npm installed for templates to create/render dynamic web contents instead of static web only
app.set('view engine', 'ejs');

//middleware for static files
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));  //to allow parsing of requests through body
app.use(morgan('dev'));


// Respond to requests
//app.get('/', (req, res)=>{
//     res.redirect('/home');
// });

//Use routes that performs actions using /blogs URL
app.use('/etungo', appRoutes);

//Set the 404 page
app.use((req,res)=>{
    res.status(404).render('404', {title:'404'});
});