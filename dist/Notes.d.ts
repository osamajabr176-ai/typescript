import User = require("./user");
declare class Note {
    private id;
    private title;
    private content;
    private userId;
    constructor(id: number, title: string, content: string, user: User);
    getId(): number;
    getTitle(): string;
    getContent(): string;
    getUserId(): number;
    setTitle(title: string): void;
    setContent(content: string): void;
    publicpreview(): string;
}
export = Note;
//# sourceMappingURL=Notes.d.ts.map