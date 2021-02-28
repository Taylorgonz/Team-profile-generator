const Manager = require('../lib/Manager')

describe( 'Manager Class', () => {
    describe("getOfficeNumber method", () => {
        it('returns this.officeNumber', () => {
            const manager = new Manager("Taylor", 4, "info@test.com",20, [
            // {officeNumber: 20 }
            ])
            manager.getOfficeNumber();
            expect(manager.officeNumber).toBe(20);
        })
    })
})