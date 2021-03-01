
const path = require('path');
const fs = require('fs');

const templateDIR = path.resolve(__dirname, "src");

const renderHTML = team => {
    const html = [];

    html.push(team
        .filter(team => team.getRole() === "Manager")
        .map(manager => renderManager(manager))
    );
    html.push(team
        .filter(team => team.getRole() === "Engineer")
        .map(engineer => renderEngineer(engineer))
    );
    html.push(team
        .filter(team => team.getRole() === "Intern")
        .map(intern => renderIntern(intern))
    );

    return renderIndex(html.join(""));
}

const renderManager = manager => {
    let template = fs.readFileSync(path.resolve(templateDIR, "manager.html"), "utf8");
    template = replacePlaceholders(template, "name", manager.getName());
    template = replacePlaceholders(template, "role", manager.getRole());
    template = replacePlaceholders(template, "email", manager.getEmail());
    template = replacePlaceholders(template, "id", manager.getId());
    template = replacePlaceholders(template, "officeNumber", manager.officeNumber());
    return template;
};

const renderEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(templateDIR, "engineer.html"), "utf8");
    template = replacePlaceholders(template, "name", engineer.getName());
    template = replacePlaceholders(template, "role", engineer.getRole());
    template = replacePlaceholders(template, "email", engineer.getEmail());
    template = replacePlaceholders(template, "id", engineer.getId());
    template = replacePlaceholders(template, "gitHub", engineer.officeGithub());
    return template;
};
const renderIntern = intern => {
    let template = fs.readFileSync(path.resolve(templateDIR, "intern.html"), "utf8");
    template = replacePlaceholders(template, "name", intern.getName());
    template = replacePlaceholders(template, "role", intern.getRole());
    template = replacePlaceholders(template, "email", intern.getEmail());
    template = replacePlaceholders(template, "id", intern.getId());
    template = replacePlaceholders(template, "officeNumber", intern.officeNumber());
    return template;
};

const renderIndex = html => {
    const template = fs.readFileSync(path.resolve(templateDIR, "index.html"), "utf8");
    return replacePlaceholders(template, "team", html)
}
const replacePlaceholders = (template, placeholder, value) => {
    const pattern = new RegExp("{{" + placeholder + "}}", "gm");
    return template.replace(pattern, value);
};

module.exports = renderHTML;