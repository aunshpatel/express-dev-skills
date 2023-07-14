var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

var skillsCtrl = require('../controllers/skills');

// All routes default to "/movies"

// GET "/"
router.get('/', skillsCtrl.index);
// GET "/new"
router.get('/new', skillsCtrl.new);
// POST /
router.post('/', skillsCtrl.create);

// GET "/:id/ skills"
//router.get('/:id/', todosCtrl.show);

router.get('/:id', skillsCtrl.show);

// GET "/:id/edit"
router.get('/:id/edit', skillsCtrl.edit);

// DELETE "/:id"
router.delete('/:id', skillsCtrl.delete);

//PUT "/:id"
router.put('/:id', skillsCtrl.update);

module.exports = router;
