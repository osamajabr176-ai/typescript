declare class User {
    private id;
    private name;
    private email;
    private password;
    private phone;
    private age;
    private noteBook;
    constructor(id: number, name: string, email: string, password: string, phone: string, age: number);
    getPhone(): string;
    getName(): string;
    getEmail(): string;
    getPassword(): string;
    getAge(): number;
    getId(): number;
    setName(name: string): void;
    setEmail(email: string): void;
    setPhone(phone: string): void;
    setAge(age: number): void;
    setPassword(password: string): void;
    displayUserInfo(): void;
}
export = User;
//# sourceMappingURL=user.d.ts.map