import useNotes from "../hooks/useNotes"
import Note from "./note/Note"

export default function RenderNotes() {
   const {notes} = useNotes()

   return(
      <>
         {notes.map((el) => {
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
      </>
   )
}
