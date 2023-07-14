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
// POST /skills
router.post('/', skillsCtrl.create);

// GET /:id/edit skills
//router.get('/:id/', todosCtrl.show);

router.get('/:id', skillsCtrl.show);

// GET /skills/:id
router.get('/:id/edit', skillsCtrl.edit);

// GET /skills/:id
router.delete('/:id', skillsCtrl.delete);

//PUT /skills/:id
router.put('/:id', skillsCtrl.update);

module.exports = router;
