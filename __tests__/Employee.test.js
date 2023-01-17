const Employee = require("../lib/Employee");

test("creates an Employee object", () => {
    const employee = new Employee ("Shirley", "131546", "Shirley123@madeup.com");

    expect(employee.name).toBe("Shirley");
    expect(employee.id).toEqual("131546");
    expect(employee.email).toBe("Shirley123@madeup.com");
    expect(employee.getName()).toBe("Shirley");
    expect(employee.getId()).toBe("131546");
    expect(employee.getEmail()).toBe("Shirley123@madeup.com");
    expect(employee.getRole()).toBe("Employee");
});