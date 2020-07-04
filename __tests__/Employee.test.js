const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Gary', 5, 'gary@sample.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

// test('gets the name of the employee', () => {
//     const employee = new Employee('Gary')
// })