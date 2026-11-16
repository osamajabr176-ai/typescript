"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User = require("./user");
const Admin = require("./Admin");
const Notes = require("./Notes");
const NoteBook = require("./NoteBook");
console.log("Hello World!");
const u1 = new User(1, "Osama", "Osama@g.com", "Osama123", "81733119", 20);
console.log(u1.getName());
u1.displayUserInfo();
const n1 = new Notes(1, "Note 1", "This is the content of Note 1", u1);
n1.setContent("This is the updated content of Note 1");
console.log(n1.publicpreview());
const nb1 = new NoteBook();
nb1.addNote(n1);
console.log(nb1.getNotes());
const a1 = new Admin(2, "Admin", "Admin@g.com", "Admin123", "81733120", 25);
a1.displayUserInfo();
//# sourceMappingURL=index.js.map