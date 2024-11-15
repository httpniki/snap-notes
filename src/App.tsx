import Navigation from './components/Navigation'
import Note from './components/note/Note'
import useKeybinds from './hooks/useNoteKeybinds'
import useNotes from './hooks/useNotes'
import './styles/App.css'
import './styles/note.css'

export default function App() {
   const { notes } = useNotes()
   useKeybinds()

   return (
      <>
         <Navigation/>

         <main>
            {(notes.length > 0) &&
               notes.map((el) => {
                  return (
                     <Note 
                        key={el.id} 
                        content={el.content}
                        color={el.color}
                        isEditable={el.isEditable}
                        id={el.id}
                     />
                  )
               })}
         </main>
      </>
   )
}
