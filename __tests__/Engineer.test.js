const Engineer = require('../lib/Engineer.js');
const engineer = new Engineer('Gary', 5, 'gary@sample.com', 'garygit');
test('adds an Engineer to the team', () => {
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})

test('gets the name of the engineer', () => {
    expect(engineer.getName()).toBe('Gary')
})
//getId
test('gets the id for an eng', () => {
    expect(engineer.getId()).toEqual(expect.any(Number));
})

//getEmail
test('gets the email for an eng', () => {
    expect(engineer.getEmail()).toEqual(expect.any(String));
})
//getGithub
test('gets the github for an eng', () => {
    expect(engineer.getGithub()).toEqual(expect.any(String));
})

test('gets the role of the engineer', () => {
    expect(engineer.getRole()).toBe('Engineer')
})