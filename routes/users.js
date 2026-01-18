const router = require('express').Router();
let User = require('../models/user.model');

router.route('/register').post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const newUser = new User({
    username,
    password,
  });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/login').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({ username: username, password: password})
        .then(user => {
            if (user) {
                res.json('Login successful');
            } else {
                res.status(400).json('Invalid username or password');
            }
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
