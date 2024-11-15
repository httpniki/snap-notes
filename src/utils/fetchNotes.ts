import type {Note} from "../types/types"

export default function fetchNotes(): Note[] | null {
   const savedNotes = window.localStorage.getItem('notes')
   
   if(!savedNotes) return null
   const parsedSavedNotes = JSON.parse(savedNotes)

   return parsedSavedNotes
}
