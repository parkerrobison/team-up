const Manager = require('../lib/Manager.js');
const manager = new Manager('Gary', 5, 'gary@sample.com','55A');
test('adds an Manager to the team', () => {
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.office).toEqual(expect.any(String));
})

test('gets the name of the manager', () => {
    expect(manager.getName()).toBe('Gary')
})

test('gets the role of the manager', () => {
    expect(manager.getRole()).toBe('manager')
})