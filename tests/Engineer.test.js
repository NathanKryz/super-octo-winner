//const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

describe('Input control for Engineers', () => {
    it('The engineers github should be properly stored in the object', () =>{
        const engineer = new Engineer("he3h0o");
        expect(engineer.github).toBe("he3h0o");
    });
    it ('The getGithub() should properly fetch the objects github', () =>{
        const engineer = new Engineer("he3h0o");
        expect(engineer.getGithub()).toBe(engineer.github);
    });
    it ('The getRole() function should properly override to Engineer', () => {
        const engineer = new Engineer("he3h0o");
        expect (engineer.getRole()).toBe(engineer.role);
    });
});