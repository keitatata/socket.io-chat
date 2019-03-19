var express = require('express');
var router = express.Router();
var moment = require('moment');
var connection = require('../mysqlConnection');

router.get('/', function(req, res, next) {
  res.render('register', {
    title: '新規会員登録'
  });
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  var name = req.body.name;
  var email = req.body.email;
  var pass_word = req.body.pass_word;
  var createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
  // console.log(userName);
  var registerQuery = 'INSERT INTO users (name, email, pass_word, created_at) VALUES ("' + name + '", ' + '"' + email + '", ' + '"' + pass_word + '", ' + '"' + createdAt + '")';
  var emailExistsQuery = 'SELECT email FROM users WHERE email = "' + email + '" LIMIT 1';
  connection.query(emailExistsQuery, function(err, email){
    console.log(email)
    var emailExists = email.length
    if (emailExists) {
      res.render('register',{
        title: '新規会員登録',
        emailExists: "このメールアドレスはすでに登録されています。"
      })
    }else{
      connection.query(registerQuery, function(err, rows) {
        console.log(typeof(rows));
        res.redirect('/login');
      });
    }
  })
});

module.exports = router;