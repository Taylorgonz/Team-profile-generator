/* intern needs on top of employee
school
getSchool()
getRole();

*/
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school){
    super(name, id, email, "Intern");
    this.school = school;
}
    getSchool() {
        return this.school
    }
    
}

module.exports = Intern;