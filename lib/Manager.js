const Employee = require("../lib/Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    this.name = name;
    this.officeNumber = officeNumber;
    this.role = "Manager"
  }

  getRole() {
    return this.role;
  }
}

module.exports = Manager;