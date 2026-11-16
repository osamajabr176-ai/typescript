import User = require("./user");
import Notes = require("./Notes");

class Admin extends User {
    private Role:string;
    constructor(id: number, name: string, email: string,password:string, phone: string, age: number) {
        super(id, name, email,password, phone, age);
        this.Role = "Admin";
    }
    manageNotes() {
        while (true) {
            
        //console.log("Notes" + Notes.preview());
        }
    }
}
export = Admin;