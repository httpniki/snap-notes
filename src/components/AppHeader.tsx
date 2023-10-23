import useNotes from '../hooks/useNotes.js'

export default function AppHeader() {
   const {createNote} = useNotes()

   return(
      <header>
         <button 
            id="create-note-btn"
            onClick={() => createNote({content: '', color: ''})}
         >
         + Add note
         </button>
      </header>
   )
}
