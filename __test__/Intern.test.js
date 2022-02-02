const Intern = require('./lib/Intern');
const Employee = require('../lib/Employee');


test("create", () => {
  const int = new Intern("Freddie Ready", 6, "fredready@fakeemail.com", "Intern", "schoolName");

  expect(int.school).toBe("schoolName");
});

test("get school()", () => {
  const int = new Intern("Freddie Ready", 6, "fredready@fakeemail.com", "Intern", "schoolName");

  expect(int.getSchool()).toBe("schoolName");
});


test("get role()", () => {
  const int = new Intern("Freddie Ready", 6, "fredready@fakeemail.com", "Intern", "schoolName");
  
  expect(int.getRole()).toBe("Intern");
});