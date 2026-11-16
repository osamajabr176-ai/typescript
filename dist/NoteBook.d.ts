import Notes = require("./Notes");
declare class NoteBook {
    private notes;
    constructor();
    addNote(note: Notes): void;
    getNotes(): Notes[];
    removeNoteById(noteId: number): void;
}
export = NoteBook;
//# sourceMappingURL=NoteBook.d.ts.map