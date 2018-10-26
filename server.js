const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');
const auth = require('./controllers/Authorization');


// Database Setup
const db = knex({
  client: 'pg',
  connection: process.env.POSTGRES_URI
});

const app = express();

app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.json());

app.post('/signin', signin.signinAuthentication(db, bcrypt))
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })
app.get('/profile/:id',  auth.requireAuth ,(req, res,next) => { profile.handleProfileGet(req, res, db)})
app.post('/profile/:id',  auth.requireAuth,(req,res,next)=>{profile.handleProfileUpdate(req,res,db)})
app.put('/image',  auth.requireAuth,(req, res,next) => { image.handleImage(req, res, db)})
app.post('/imageurl',  auth.requireAuth, (req, res,next) => { image.handleApiCall(req, res)})

app.listen(3000, ()=> {
  console.log('app is running on port 3000');
})
