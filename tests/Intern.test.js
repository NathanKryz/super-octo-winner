//const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

describe('Input control for Interns', () => {
    it('The interns school should be properly stored in the object', () =>{
        const intern = new Intern("John", "11", "yes@gmail.com", "UofT");
        expect(intern.school).toBe("UofT");
    });
    it ('The getSchool() should properly fetch the objects school', () =>{
        const intern = new Intern("John", "11", "yes@gmail.com", "UofT");
        expect(intern.getSchool()).toBe(intern.school);
    });
    it ('The getRole() function should properly override to Intern', () => {
        const intern = new Intern("John", "11", "yes@gmail.com", "UofT");
        expect (intern.getRole()).toBe("Intern");
    });
});