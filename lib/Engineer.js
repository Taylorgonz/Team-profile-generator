/* needs on top of employee clss
githu
getGithub()
getRole()
*/
const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, email, id, "Engineer")
       
        this.gitHub = gitHub
    }

    getGithub() {
        return this.gitHub;
    }
    

}
module.exports = Engineer;