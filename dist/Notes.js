"use strict";
const User = require("./user");
class Note {
    id;
    title;
    content;
    userId;
    constructor(id, title, content, user) {
        this.id = id;
        this.title = title;
        this.content = content;
        if (user.getId() === undefined || user.getId() === null) {
            throw new Error("User ID is required");
        }
        this.userId = user.getId();
    }
    getId() { return this.id; }
    getTitle() { return this.title; }
    getContent() { return this.content; }
    getUserId() { return this.userId; }
    setTitle(title) { this.title = title; }
    setContent(content) { this.content = content; }
    publicpreview() {
        return this.content.length > 20 ? this.content.substring(0, 20) + "..." : this.content;
    }
}
module.exports = Note;
//# sourceMappingURL=Notes.js.map