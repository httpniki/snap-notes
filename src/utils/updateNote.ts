import {Note} from "../types/note";
import {UpdateNotesProps} from "../types/types";

type UpdateArgs = Omit<UpdateNotesProps, 'id'>

export default function updateNote(currentNote: Note, update: UpdateArgs): Note {
   const {content, color, isEditable} = update

   const updatedNote: Note = {
      content: content ?? currentNote.content,
      color: color ?? currentNote.color,
      isEditable: isEditable ?? currentNote.isEditable,
      id: currentNote.id
   }
   
   return updatedNote
}
