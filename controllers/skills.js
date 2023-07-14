const Skill = require('../models/skill');

function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll(),
      title:'All Skills'
    });
}

function show(req, res) {
  res.render('todos/show', {
      skill:Skill.getOne(req.params.id)
  });
}

// function skills(req, res) {
//   res.render('skills/index', {
//     skills: Skill.getAll()
//   });
// }

function newSkill(req, res) {
    res.render('skills/new', { title: 'New Skill' });
}
function create(req, res) {
  // The model is responsible for creating data
  Skill.create(req.body);
  // Do a redirect anytime data is changed
  res.redirect('/');
}

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect('/');
}

module.exports = {
    index,
    //skills,
    create,
    show,
    new: newSkill,
    delete:deleteSkill
};