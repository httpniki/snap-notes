import { useEffect } from 'react'
import AppHeader from './components/AppHeader'
import Note from './components/note/Note'
import useNotes from './hooks/useNotes'
import './styles/App.css'
import './styles/note.css'
import { Note as NoteType} from './types/types'

export default function App() {
   const { notes } = useNotes()

   useEffect(() => {
      const $notes = document.querySelectorAll('.note') as NodeListOf<HTMLElement>

      function toggleNote() {
         const $currentNote = document.activeElement?.parentElement as HTMLElement
         const currentNoteIndex = notes.findIndex((el) => el.id === $currentNote.dataset.id)

         const nextNote = notes.reduce<NoteType | null>((acc, el, index) => {
            if(acc) return acc

            if(currentNoteIndex === notes.length - 1) {
               if(index >= 0 && el.isEditable) return el
            }

            if(currentNoteIndex < notes.length - 1) {
               if(index > currentNoteIndex && el.isEditable) return el
            }

            return null
         }, null)

         $notes.forEach(($note) => {
            if($note.dataset.id !== nextNote?.id) return
            $note.querySelector('textarea')?.focus()
         })
      }

      function handleKeyDown(event: KeyboardEvent) {
         switch(event.key) {
         case 'Tab': 
            event.preventDefault()
            toggleNote()
            break
         }
      }

      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
   },[notes])

   return (
      <>
         <AppHeader/>

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
