
function skillsMember() {
    const skills = ['JavaScript', 'Python', 'Java', 'C++'];
    const member = {
        name: 'John Doe',
        age: 30,
        skills: skills,
        addSkill: function(skill) {
            this.skills.push(skill);
        },
        listSkills: function() {
            return this.skills.join(', ');
        }
    };

    return member;
}