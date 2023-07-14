const skills = [
    {id:1, skill: 'HTML', level:"Proficient"},
    {id:2, skill: 'Flutter', level:"Proficient"},
    {id:3, skill: 'Dart', level:"Proficient"},
];

module.exports = {
    getAll
};
	
function getAll() {
    return skills;
}