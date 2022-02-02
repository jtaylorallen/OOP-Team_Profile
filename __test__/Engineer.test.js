const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');

test("create", () => {
    const eng = new Engineer("Freddie Ready", 6, "fredready@fakeemail.com", "Engineer", "github");
  
    expect(eng.github).toBe("github");
  });
  
  test("get()", () => {
    const eng = new Engineer("Freddie Ready", 6, "fredready@fakeemail.com", "Engineer", "github");
  
    expect(eng.getGithub()).toBe("github");
  });
  
  test("get Role()", () => {
    const eng = new Engineer("Freddie Ready", 6, "fredready@fakeemail.com", "Engineer", "github");
    
    expect(eng.getRole()).toBe("Engineer");
  });
  


