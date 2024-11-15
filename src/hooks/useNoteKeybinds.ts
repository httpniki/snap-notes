import { useEffect } from "react";
import useNotes from "./useNotes";
import { Note as NoteType} from '../types/types'

export default function useKeybinds() {
   const {notes, deleteNote, updateNote, createNote} = useNotes()

   function toggleNote($currentNote: HTMLElement) {
      const $notes = document.querySelectorAll('.note') as NodeListOf<HTMLElement>
      const currentNoteIndex = notes.findIndex((el) => el.id === $currentNote.dataset.id)

      const nextNote = notes.reduce<NoteType | null>((acc, el, index) => {
         if(acc) return acc
         const isLastNote = currentNoteIndex === notes.length - 1
         const isNotLastNote = currentNoteIndex < notes.length - 1

         if(isLastNote && index >= 0 && el.isEditable) return el
         if(isNotLastNote && index > currentNoteIndex && el.isEditable) return el

         return null
      }, null)

      $notes.forEach(($note) => {
         if($note.dataset.id !== nextNote?.id) return
         $note.querySelector('textarea')?.focus()
      })
   }

   useEffect(() => {
      function handleKeyDown(event: KeyboardEvent) {
         const $note = document.activeElement?.parentElement as HTMLElement
         const note = notes.find((el) => el.id === $note.dataset.id)

         switch(event.key) {
         case 'Tab': 
            event.preventDefault()
            toggleNote($note)
            break
         case 'Backspace':
            if(!note) break
            event.preventDefault()
            deleteNote(note.id)
            break
         case 'Delete':
            if(!note) break
            deleteNote(note.id)
            break
         case 'l': 
            if(!event.ctrlKey || !note) break
            event.preventDefault()
            updateNote({ id: note.id, isEditable: !note.isEditable})
            break
         case 'a':
            if(!event.ctrlKey) break
            event.preventDefault()
            createNote()
            break
         }
      }

      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
   },[notes])
}
