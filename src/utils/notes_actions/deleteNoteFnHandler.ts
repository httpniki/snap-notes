import {Note} from "../../types/note";
import saveNote from "../saveNote";

interface DeleteNoteFnHandlerProps {
   noteID: Note['id']
   notes: Note[]
   refetchNotes: () => void
}

export default function deleteNoteFnHandler({
   noteID, 
   notes, 
   refetchNotes
}: DeleteNoteFnHandlerProps) {
   const updatedNotes = notes.filter(el => el.id !== noteID)
      
   saveNote(updatedNotes)
   refetchNotes()
}
