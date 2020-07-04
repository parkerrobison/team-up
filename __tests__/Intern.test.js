const Intern = require('../lib/Intern.js');
const intern = new Intern('Gary', 5, 'gary@sample.com', 'UoU');
test('adds an intern to the team', () => {
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})

test('gets the name of the intern', () => {
    expect(intern.getName()).toBe('Gary')
})

test('gets the role of the intern', () => {
    expect(intern.getRole()).toBe('intern')
})