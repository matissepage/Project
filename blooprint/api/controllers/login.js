const bcrypt = require('bcrypt');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

let signup = (req, res, next) => {
    console.log("time: " + Date.now())
    console.log(req.body.email)
    console.log(req.body.psswd)
    bcrypt.hash(req.body.psswd, 10)
      .then(hash => {
        const user = new User({
          email: req.body.email,
          password: hash
        });
        user.save()
          .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
          .catch(error => res.status(400).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };

let login = (req, res, next) => {
    User.findOne({ email: req.body.email })
    .then(user => {
        if (!user) {
            return res.status(401).json({ message: "User not found" })
        }
        bcrypt.compare(req.body.psswd, user.password)
        .then(valid => {
          if (!valid) {
              return res.status(401).json({ message: "Password not correct" })
          }
          console.log(user._id)
          res.status(200).json({
              userId: user._id,
              token: jwt.sign(
                { userId: user._id },
                'RANDOM_TOKEN_SECRET',
                { expiresIn: "24h" }
              )
          });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

let deleteUser = () => {
  console.log("here")
  User.findByIdAndDelete({ email: "lisahoms0504@gmail.com" })
  .then(console.log("user delete"))
  .catch(error => console.log(error))
}

module.exports = {
  signup,
  login,
  deleteUser
}