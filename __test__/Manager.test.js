const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test("creates an Manager office number", () => {
  const mang = new Manager("Cam", 6, "fredready@fakeemail.com", "Manager", 23);

  expect(mang.officeNumber).toBe(100);
});

test("get Role()", () => {
  const mang = new Manager("Cam", 6, "fredready@fakeemail.com", "Manager", 23);

  expect(mang.getRole()).toBe("Manager");
});