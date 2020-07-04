function Intern(name, id, email, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;

    this.getSchool = function() {
        return this.school;
    }
}

module.exports = Intern;