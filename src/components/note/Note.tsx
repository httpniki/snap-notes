import useNotes from "../../hooks/useNotes";
import type {Note as NoteProps} from "../../types/types";
import NoteNav from "./NoteNav";

export default function Note({content, color, isEditable, id}: NoteProps) {
   const { updateNote } = useNotes() 

   return(
      <article className="note" data-id={id}>
         <NoteNav 
            noteID={id}
            isEditable={isEditable}
            color={color}
            contentLength={content.length}
         />
         <textarea 
            defaultValue={content} 
            onChange={(event) => updateNote({content: event.target.value, id})}
            readOnly={!isEditable}
         />
      </article>

   )
}
