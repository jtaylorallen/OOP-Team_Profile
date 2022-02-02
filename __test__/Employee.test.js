const Employee = require('../lib/Employee');

test('creates new employee', () => {
    const employee = new Employee('Freddie Ready')

    expect(employee.name).toBe('Freddie Ready');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.strength).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining("@"));
  
  });
 
test("get name from getName()", () => {
    const employee = new Employee("Freddie Ready");
  
    expect(employee.getName()).toEqual(expect.any(String));
  });

  test("getID()", () => {
    const employee = new Employee("Freddie Ready", 6);
  
    expect(employee.getId()).toBe(1);
  });
  
 
  test(" getEmail()", () => {
    const employee = new Employee("Freddie Ready", 6, "fredready@fakeemail.com");
  
    expect(employee.getEmail()).toBe("Freddie Ready");
  });
  
 
  test("getRole()", () => {
    const employee = new Employee("Freddie Ready", 6, "Freddie Ready", "Employee");
  
    expect(employee.getRole()).toBe("Employee");
  });
  

