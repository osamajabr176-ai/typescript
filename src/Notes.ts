import User = require("./user");

class Note {
    private id: number;
    private title: string;
    private content: string;
    private userId: number;
    
    constructor(id: number, title: string, content: string, user: User) {
        this.id = id;
        this.title = title;
        this.content = content;
        if(user.getId() === undefined || user.getId() === null) {
            throw new Error("User ID is required");
        }
        this.userId = user.getId();
        
    }

    getId(): number { return this.id; }
    getTitle(): string { return this.title; }
    getContent(): string { return this.content; }
    getUserId(): number { return this.userId; }

    setTitle(title: string): void { this.title = title; }
    setContent(content: string): void { this.content = content; }

    publicpreview(): string {
        return this.content.length > 20 ? this.content.substring(0, 20) + "..." : this.content;
    }
}
export = Note;