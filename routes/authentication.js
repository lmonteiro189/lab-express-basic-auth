const express = require('express');
const bcrypt = require('bcryptjs');
const Username = require('./../models/user');

const authenticationRouter = new express.Router();

authenticationRouter.get('/sign-up', (req, res) => {
    res.render('sign-up');
  });
  
  authenticationRouter.post('/sign-up', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
  
    bcrypt.hash(password, 10)
      .then(hashAndSalt => {
        return Username.create({
          username,
          passwordHashAndSalt: hashAndSalt
        });
      })
      .then(user => {
        console.log(user);
        res.redirect('/');
      })
      .catch(error => {
        // ...
      })
  });
  
  authenticationRouter.get('/sign-in', (req, res) => {
    res.render('sign-in');
  });
  
  authenticationRouter.post('/sign-in', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
  
    Username.findOne({
      username
    })
      .then(user => {
        console.log(user);
        return bcrypt.compare(password, username.passwordHashAndSalt);
      })
      .then(comparison => {
        console.log(comparison);
        res.redirect('/');
      })
      .catch(error => {
        // error
      })
  });
  
  module.exports = authenticationRouter;