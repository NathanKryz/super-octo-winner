//const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe('Input control for the Manager', () => {
    it('The Managers officeNumber should be properly stored in the object', () =>{
        const manager = new Manager("441");
        expect(manager.officeNumber).toBe("441");
    });
    it ('The getRole() function should properly override to Manager', () => {
        const manager = new Manager("441");
        expect (manager.getRole()).toBe(manager.role);
    });
});