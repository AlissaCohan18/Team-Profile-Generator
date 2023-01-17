const Employee = require("../lib/Employee");

class Engineer extends Employee {
  constructor(name, gitUsername) {
    super(name);

    this.name = name;
    this.gitUsername = gitUsername;
    this.role = "Engineer"
  }

  getGithub() {
    return "https://github.com/" + this.gitUsername
  }

  getRole() {
    return this.role;
  }

}

module.exports = Engineer;