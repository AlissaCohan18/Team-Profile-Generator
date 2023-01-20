const Engineer = require("../lib/Engineer");

test("creates an Engineer object", () => {
  const engineer = new Engineer("Charlie", "idDummy", "emailDummy", "Charlie18");

  expect(engineer.gitUsername).toBe("Charlie18");
  expect(engineer.getGithub()).toBe("https://github.com/Charlie18");
  expect(engineer.getRole()).toBe("Engineer");
});

