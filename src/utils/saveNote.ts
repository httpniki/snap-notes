import {Note} from "../types/note";

export default function saveNote(notes: Note[]) {
   localStorage.setItem('notes', JSON.stringify(notes))
}
