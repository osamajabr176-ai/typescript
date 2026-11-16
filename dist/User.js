"use strict";
const NoteBook = require("./NoteBook");
class User {
    id;
    name;
    email;
    password;
    phone;
    age;
    noteBook;
    constructor(id, name, email, password, phone, age) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.noteBook = [];
        if (age < 18 || age > 60) {
            throw new Error("Age must be between 18 and 60");
        }
        else {
            this.age = age;
        }
    }
    getPhone() {
        return this.phone;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getPassword() {
        return this.password;
    }
    getAge() {
        return this.age;
    }
    getId() {
        return this.id;
    }
    setName(name) {
        this.name = name;
    }
    setEmail(email) {
        this.email = email;
    }
    setPhone(phone) {
        this.phone = phone;
    }
    setAge(age) {
        if (age < 18 || age > 60) {
            throw new Error("Age must be between 18 and 60");
        }
        this.age = age;
    }
    setPassword(password) {
        this.password = password;
    }
    displayUserInfo() {
        console.log(`User ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Phone: ${this.phone}`);
        console.log(`Age: ${this.age}`);
    }
}
module.exports = User;
//# sourceMappingURL=user.js.map