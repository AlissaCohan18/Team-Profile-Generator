const Manager = require("../lib/Manager");

test("creates a Manager object", () => {
  const manager = new Manager("Charlie",  "idDummy", "emailDummy","3052222222");

  expect(manager.name).toBe("Charlie");
  expect(manager.officeNumber).toBe("3052222222");
  expect(manager.getRole()).toBe("Manager");
});

