const Intern = require("../lib/Intern");

test("creates an Intern object", () => {
  const intern = new Intern("Alex","idDummy", "emailDummy","GT");

  expect(intern.school).toBe("GT");
  expect(intern.getSchool()).toBe("GT");
  expect(intern.getRole()).toBe("Intern");
});

