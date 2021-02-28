const Engineer = require('../lib/Engineer')

describe( 'Engineer Class', () => {
    describe("getGithub method", () => {
        it('returns this.gitHub', () => {
            const engineer = new Engineer("Taylor", 4, "info@test.com","Taylorgonz", [
            {gitHub: "Taylorgonz"}
            ])
            engineer.getGithub();
            expect(engineer.gitHub).toBe("Taylorgonz");
        })
    })
})