import {createContext }from "react"
import useFetchNotes from "../hooks/useFetchNotes"
import type {Note} from "../types/note"
import type { NotesContextValue,  NotesProviderProps, UpdateNotesProps} from "../types/types"
import createNoteFnHandler from "../utils/notes_actions/createNoteFnHandler"
import saveNote from "../utils/saveNote"
import updateNote from "../utils/updateNote"

export const NotesContext = createContext<NotesContextValue | null>(null)

export function NotesProvider({children}: NotesProviderProps) {
   const {notes, refetchNotes} = useFetchNotes()

   const createNote = () => createNoteFnHandler({ notes, refetchNotes })

   function updateNoteFn(props: UpdateNotesProps) {
      const updatedNotes = notes.map(el => {
         if(el.id === props.id) return updateNote(el, props)
         return el
      })

      saveNote(updatedNotes)
      refetchNotes()
   }

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
            updateNote: updateNoteFn,
            deleteNote
         }}>
         {children}
      </NotesContext.Provider>
   )
}
