// const mongoose = require("mongoose");
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const User = require('./controllers/login')
const mongoose = require('mongoose')
const route = require('./routes/user');

mongoose.connect('mongodb+srv://clement:rayder890@blooprint-4defh.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
const app = express();

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
})); 
app.use(cors());

// app.post('/signup', (req, res, next) => {
//   console.log(req.body.email)
//   console.log(req.body.psswd)
//     User.signup(req, res, next)
// });
app.use('', route)

app.listen(9000);