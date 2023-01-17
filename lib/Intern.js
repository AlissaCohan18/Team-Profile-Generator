const Employee = require("../lib/Employee");

class Intern extends Employee {
  constructor(name, school) {
    super(name);

    this.name = name;
    this.school = school;
    this.role = "Intern";
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return this.role;
  }

}

module.exports = Intern;