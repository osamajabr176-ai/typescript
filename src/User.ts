import NoteBook =  require("./NoteBook");
class User {
    private id: number;
    private name: string;
    private email: string;
    private password: string;
    private phone: string;
    private age: number;
    private noteBook: NoteBook[];

    constructor(id: number, name: string, email: string,password:string, phone: string, age: number) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.noteBook = [];
        if (age<18||age>60) {
            throw new Error("Age must be between 18 and 60");
        }

        else {
            this.age = age;
        }

    }
    getPhone(){
        return this.phone;
    }

    getName(){
        return this.name;
    }
    getEmail(){
        return this.email;
    }
    getPassword(){
        return this.password;
    }
    getAge(){
        return this.age;
    }

    getId(){
        return this.id;
    }
    setName(name:string){
        this.name = name;
    }
    setEmail(email:string){
        this.email = email;
    }
    setPhone(phone:string){
        this.phone = phone;
    }
    setAge(age:number){
        if (age <18 || age > 60){
            throw new Error("Age must be between 18 and 60");
        }
        this.age = age;
    }
    setPassword(password:string){
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

export = User;