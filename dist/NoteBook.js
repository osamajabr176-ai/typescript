"use strict";
const Notes = require("./Notes");
class NoteBook {
    notes;
    constructor() {
        this.notes = [];
    }
    addNote(note) {
        this.notes.push(note);
    }
    getNotes() {
        return this.notes;
    }
    removeNoteById(noteId) {
        this.notes = this.notes.filter(note => note.getId() !== noteId);
    }
}
module.exports = NoteBook;
//# sourceMappingURL=NoteBook.js.map