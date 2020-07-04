const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Gary', 5, 'gary@sample.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test('gets the name of the employee', () => {
    const employee = new Employee('Gary');
    expect(employee.getName()).toBe('Gary')
})

getId();
test('gets the Id of the employee', () => {
    const employee = new Employee(5);
    expect(employee.getId()).toEqual(expect.any(Number))
})

// getEmail()
test('gets the Email of the employee', () => {
    const employee = new Employee('gary@sample.com');
    expect(employee.getEmail()).toBe('gary@sample.com')
})

// getRole()
test('gets the role of the employee', () => {
    const employee = new Employee('Employee');
    expect(employee.getRole()).toBe('employee')
})