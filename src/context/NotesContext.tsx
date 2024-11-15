import {createContext }from "react"
import useFetchNotes from "../hooks/useFetchNotes"
import type {Note} from "../types/types"
import type { NotesContextValue,  NotesProviderProps, UpdateNoteProps} from "../types/types"
import updateNote from "../utils/updateNote"
import saveNote from "../utils/saveNote"

export const NotesContext = createContext<NotesContextValue | null>(null)

export function NotesProvider({children}: NotesProviderProps) {
   const {notes, refetchNotes} = useFetchNotes()

   function createNote() {
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

   function handleUpdateNote(props: UpdateNoteProps) {
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
            updateNote: handleUpdateNote,
            deleteNote
         }}>
         {children}
      </NotesContext.Provider>
   )
}
