import {createContext }from "react"
import useFetchNotes from "../hooks/useFetchNotes"
import type {Note} from "../types/note"
import type { NotesContextValue,  NotesProviderProps, UpdateNoteProps} from "../types/types"
import createNoteFnHandler from "../utils/notes_actions/createNoteFnHandler"
import updateNoteFnHandler from "../utils/notes_actions/updateNoteFnHandler"
import saveNote from "../utils/saveNote"

export const NotesContext = createContext<NotesContextValue | null>(null)

export function NotesProvider({children}: NotesProviderProps) {
   const {notes, refetchNotes} = useFetchNotes()

   const createNote = () => createNoteFnHandler({ notes, refetchNotes })

   const updateNote = (props: UpdateNoteProps) => updateNoteFnHandler({
      notes, 
      refetchNotes, 
      updateProps: props
   })

   function deleteNote(id: Note['id']) {
      const updatedNotes = notes.filter(el => el.id !== id)
      
      saveNote(updatedNotes)
      refetchNotes()
   }

   return (
      <NotesContext.Provider 
         value={{
            notes,
            createNote,
            updateNote,
            deleteNote
         }}>
         {children}
      </NotesContext.Provider>
   )
}
