import {Note} from "../types/types";

export default function saveNote(notes: Note[]) {
   localStorage.setItem('notes', JSON.stringify(notes))
}
