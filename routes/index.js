var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Skill' });
});

router.get('/skills', function(req, res, next) {
  res.render('index', { title: 'Skills List' });
});

module.exports = router;
