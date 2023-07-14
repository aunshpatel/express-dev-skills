const skills = [
    {id:125223, skill: 'HTML', level:"Proficient"},
    {id:127904, skill: 'Flutter', level:"Proficient"},
    {id:139608, skill: 'Dart', level:"Proficient"},
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};
	
function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skills.push(skill);
};

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill=>skill.id === id);
    skills.splice(idx, 1);
}
function update(id, updatedTodo) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    skill.skill = updatedTodo.skill;
    skill.level = updatedTodo.level;
}