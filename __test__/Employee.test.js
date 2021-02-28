const Employee = require('../lib/Employee')

describe( 'Employee Class', () => {
    describe("getName method", () => {
        it('returns this.name', () => {
            const employee = new Employee("Taylor", [
            { name: "Taylor"}
            ])
            employee.getName();
            expect(employee.name).toBe("Taylor");
        })
    })

    describe("getId method", () => {
        it('returns this.Id', () => {
            const employee = new Employee('Taylor', 4,  [
            {id: 4}
            ])
            employee.getId();
            expect(employee.id).toBe(4);
        })
    })

    describe("getEmail method", () => {
        it('returns this.Email', () => {
            const employee = new Employee("Taylor", 4, "info@test.com", [
            {email: "info@test.com"}
            ])
            employee.getEmail();
            expect(employee.email).toBe("info@test.com");
        })
    })
})