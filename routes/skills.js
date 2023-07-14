var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });



var skillsCtrl = require('../controllers/skills');

// All paths start with "/skills"

// GET /skills
router.get('/', skillsCtrl.index);
// GET /skills/new
router.get('/new', skillsCtrl.new);
// POST /todos
router.post('/', skillsCtrl.create);

// GET /skills/:id
router.get('/:id', skillsCtrl.show);

module.exports = router;
