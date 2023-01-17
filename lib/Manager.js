const Employee = require("../lib/Employee");

class Manager extends Employee {
  constructor(name, officeNumber) {
    super(name);

    this.name = name;
    this.officeNumber = officeNumber;
    this.role = "Manager"
  }

  getRole() {
    return this.role;
  }
}

module.exports = Manager;