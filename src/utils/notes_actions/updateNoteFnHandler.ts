import type {Note} from "../../types/note";
import type {UpdateNoteProps} from "../../types/types";
import saveNote from "../saveNote";
import updateNote from "../updateNote";

interface UpdateNoteFnHandlerProps {
   notes: Note[]
   refetchNotes: () => void
   updateProps: UpdateNoteProps
}

export default function updateNoteFnHandler({ notes, refetchNotes, updateProps }: UpdateNoteFnHandlerProps) {
   const updatedNotes = notes.map(el => {
      if(el.id === updateProps.id) return updateNote(el, updateProps)
      return el
   })

   saveNote(updatedNotes)
   refetchNotes()
}

