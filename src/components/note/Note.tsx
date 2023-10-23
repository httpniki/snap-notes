import * as React from "react";
import useNotes from "../../hooks/useNotes";
import type {Note as NoteProps} from "../../types/note";
import NoteNav from "./NoteNav";

export default function Note({content, color, isEditable, id}: NoteProps) {
   const {updateNote} = useNotes() 

   function updateNoteHdlr(event: React.ChangeEvent<HTMLTextAreaElement>) {
      updateNote({content: event.target.value, id})
   }

   return(
      <article id="note">
         <NoteNav 
            noteID={id}
            isEditable={isEditable}
            color={color}
            contentLength={content.length}
         />
         <textarea 
            defaultValue={content} 
            onChange={updateNoteHdlr}
            readOnly={!isEditable}
         />
      </article>

   )
}
