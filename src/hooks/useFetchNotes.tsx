import {useEffect, useState} from "react"
import {Note} from "../types/note"
import fetchNotes from "../utils/fetchNotes"
import saveNote from "../utils/saveNote"

export default function useFetchNotes() {
   const [notes, setNotes] = useState<Note[]>([])

   useEffect(() => {
      const localStorageNotes = fetchNotes()
      if(!localStorageNotes) return saveNote([])

      setNotes(localStorageNotes)
   }, [])
   
   function refetchNotes(): void {
      const localStorageNotes = fetchNotes()
      if(!localStorageNotes) return

      setNotes(localStorageNotes)
   }

   return { 
      refetchNotes,
      notes
   }
}
