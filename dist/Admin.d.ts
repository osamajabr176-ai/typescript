import User = require("./user");
declare class Admin extends User {
    private Role;
    constructor(id: number, name: string, email: string, password: string, phone: string, age: number);
    manageNotes(): void;
}
export = Admin;
//# sourceMappingURL=Admin.d.ts.map