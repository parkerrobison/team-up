const Intern = require('../lib/Intern.js');

test('adds an intern to the team', () => {
    const intern = new Intern('Gary', 5, 'gary@sample.com', 'UoU');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})
