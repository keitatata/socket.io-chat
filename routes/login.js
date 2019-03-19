var express = require('express');
var router = express.Router();
var connection = require('../mysqlConnection');

router.get('/', function(req, res, next) {
  if (req.session.id) {
    res.redirect('/');
  } else {
    res.render('login', {
      title: 'ログイン'
    });
  }
});

router.post('/', function(req, res, next) {
  var email = req.body.email;
  var pass_word = req.body.pass_word;
  var query = 'SELECT id FROM users WHERE email = "' + email + '" AND pass_word = "' + pass_word + '" LIMIT 1';
  connection.query(query, function(err, rows) {
    var Id = rows.length? rows[0].id: false;
    if (Id) {
      req.session.id = Id;
      res.redirect('/');
    } else {
      res.render('login', {
        title: 'ログイン',
        noUser: 'メールアドレスとパスワードが一致するユーザーはいません'
      });
    }
  });
});

module.exports = router;