//const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

describe('Input control for Interns', () => {
    it('The interns school should be properly stored in the object', () =>{
        const intern = new Intern("UofT");
        expect(intern.school).toBe("UofT");
    });
    it ('The getSchool() should properly fetch the objects school', () =>{
        const intern = new Intern("UofT");
        expect(intern.getSchool()).toBe(intern.school);
    });
    it ('The getRole() function should properly override to Intern', () => {
        const intern = new Intern("UofT");
        expect (intern.getRole()).toBe(intern.role);
    });
});