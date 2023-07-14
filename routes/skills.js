var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// All paths start with "/skills"

var skillsCtrl = require('../controllers/skills');

  // All actual paths begin with "/todos"

  // GET /todos
  router.get('/', skillsCtrl.index);

module.exports = router;
