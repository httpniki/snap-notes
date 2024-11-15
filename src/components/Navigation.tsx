import useNotes from '../hooks/useNotes.js'

export default function Navigation() {
   const { createNote } = useNotes()

   return(
      <header>
         <button 
            id="create-note-btn"
            onClick={createNote}
         >
            + Add note
         </button>
      </header>
   )
}
