const Intern = require('../lib/Intern')

describe( 'Intern Class', () => {
    describe("getIntern method", () => {
        it('returns this.gitHub', () => {
            const intern = new Intern("Taylor", "info@test.com", 4 ,"University of New Hampshire", [
            {gitHub: "University of New Hampshire"}
            ])
            intern.getSchool();
            expect(intern.school).toBe("University of New Hampshire");
        })
    })
})