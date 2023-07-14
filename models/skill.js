const skills = [
    {id:1, skill: 'HTML', level:"Proficient"},
    {id:2, skill: 'Flutter', level:"Proficient"},
    {id:3, skill: 'Dart', level:"Proficient"},
];
	
function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skills => skills.id === id);
}

function create(skill) {
    // Add the id
    skill.id += 1;
    // New todos wouldn't be done :)
    //todo.done = false;
    skills.push(skill);
  };

module.exports = {
    getAll,
    getOne,
    create
};