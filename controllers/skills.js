const Skill = require('../models/skill');


module.exports = {
  index,
  skills,
  create,
  show,
  new: newSkill,
  delete:deleteSkill,
  edit,
  update
};

function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll(),
      title:'All Skills'
    });
}

function show(req, res) {
  res.render('skills/show', {
    title:'Your Skill',
      skill:Skill.getOne(req.params.id)
  });
}

function skills(req, res) {
  res.render('skills/index', {
    title:'Skill Page',
    skill:Skill.getOne(req.params.id)
  });
}


function newSkill(req, res) {
    res.render('skills/new', { title: 'Add New Skill' });
}

function create(req, res) {
  // The model is responsible for creating data
  console.log(req.body);
  Skill.create(req.body);
  // Do a redirect anytime data is changed
  res.redirect('/');
}

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect('/');
}

function update(req, res) {
  console.log(req.body);
  Skill.update(req.params.id, req.body);
  res.redirect('/');
}

function edit(req, res) {
  res.render('skills/edit', {
    title:'Edit Skill',
    skill:Skill.getOne(req.params.id),
  });
}