"use strict";
const User = require("./user");
const Notes = require("./Notes");
class Admin extends User {
    Role;
    constructor(id, name, email, password, phone, age) {
        super(id, name, email, password, phone, age);
        this.Role = "Admin";
    }
    manageNotes() {
        while (true) {
            //console.log("Notes" + Notes.preview());
        }
    }
}
module.exports = Admin;
//# sourceMappingURL=Admin.js.map