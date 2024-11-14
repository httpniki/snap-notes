import {useContext} from 'react'
import {NotesContext} from '../context/NotesContext.js'

export default function useNotes() {
   const context = useContext(NotesContext)

   if(!context) throw new Error('Context is not provided')

   return context
}
