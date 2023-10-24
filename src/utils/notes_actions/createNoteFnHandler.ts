import type {Note} from "../../types/note";
import saveNote from "../saveNote";

interface CreateNoteFnHandlerProps {
   notes: Note[]
   refetchNotes: () => void
}

export default function createNoteFnHandler({notes, refetchNotes}: CreateNoteFnHandlerProps) {
   let id = notes.length

   const isExists = notes.some(el => Number(el.id) === id)
   if(isExists) id = id + 1

   const newNote: Note = {
      content: '',
      color: '#bc98f3',
      id: id.toString(),
      isEditable: true
   }

   saveNote([...notes, newNote])  
   refetchNotes()
}
