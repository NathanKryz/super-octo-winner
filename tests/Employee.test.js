const Employee = require('../lib/Employee');

describe('Input control for Employees', () => {
    it('The inquired name should be properly stored in the object', () =>{
        const employee = new Employee("Frank", "23", "nope@gmail.com");
        expect(employee.name).toBe("Frank");
    });
    it ('The inquired ID should be properly stored in the object', () =>{
        const employee = new Employee("John", "42", "yes@gmail.com");
        expect(employee.id).toBe("42");
    });
    it ('The inquired email should be properly stored in the object', () => {
        const employee = new Employee("Joe", "23", "nooo@gmail.com");
        expect (employee.email).toBe("nooo@gmail.com");
    });
    it ('getName() should return a given employees name', () => {
        const employee = new Employee ("Frank", "25", "nope@gmail.com");
        expect(employee.getName()).toBe(employee.name);
    });
    it ('getId() should return a given employees Id', () => {
        const employee = new Employee ("Frank", "25", "nope@gmail.com");
        expect(employee.getId()).toBe(employee.id);
    });
    it ('getEmail() should return a given employees email', () => {
        const employee = new Employee ("Frank", "25", "nope@gmail.com");
        expect(employee.getEmail()).toBe(employee.email);
    });
    it ('getRole() should return a given employees role, in this case employee', () => {
        const employee = new Employee ("Frank", "25", "nope@gmail.com");
        expect(employee.getRole()).toBe(employee.role);
    });
});