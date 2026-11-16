import Notes = require("./Notes");


class NoteBook {
    private notes: Notes[];

    constructor() {
        this.notes = [];
    }

    addNote(note: Notes) {
        this.notes.push(note);
    }

    getNotes(): Notes[] {
        return this.notes;
    }
    
    removeNoteById(noteId: number) {
        this.notes = this.notes.filter(note => note.getId() !== noteId);
    }
}
export = NoteBook;