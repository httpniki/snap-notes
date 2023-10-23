import {useState} from "react";
import useNotes from "../../hooks/useNotes";
import {Note} from "../../types/note";
import changeElementColorStyle from "../../utils/changeColorStyle";
import LockSVG from "../assets/LockSVG";
import PalleteSVG from "../assets/PaletteSVG";
import TrashSVG from "../assets/TrashSVG";
import UnlockSVG from "../assets/UnlockSVG";
import ChangeNoteColorModal from "./ChangeNoteColorModal";

interface NoteNavProps {
   noteID: Note['id']
   isEditable: Note['isEditable']
   color: string
   contentLength: number
}

export default function NoteNav({noteID, isEditable, color, contentLength}: NoteNavProps) {
   const {deleteNote, updateNote} = useNotes()
   const [renderModal, setRenderModal] = useState(false)
   const elementColorStyle = changeElementColorStyle(color)

   function onProtectNote() {
      updateNote({
         isEditable: !isEditable,
         id: noteID
      })
   }

   return(
      <>
         <nav 
            style={{backgroundColor: color}}
         >
            <span 
               id="note-content-length"
               style={{color: elementColorStyle}}
            >
               {contentLength}
            </span>

            <div id="note-nav-btn-container">
               <button 
                  id="delete-note-btn"
                  onClick={() => deleteNote(noteID)}
               > 
                  <TrashSVG
                     style={{fill: elementColorStyle}}   
                  />
               </button>

               <button 
                  id="protect-note-btn"
                  onClick={onProtectNote}
               >
                  {(isEditable)
                     ? <UnlockSVG
                        style={{stroke: elementColorStyle}}
                     />
                     : <LockSVG
                        style={{stroke: elementColorStyle}}
                     />
                  }
               </button>

               <button 
                  id="change-note-color-btn"
                  onClick={() => setRenderModal(true)}
               >
                  <PalleteSVG
                     style={{fill: elementColorStyle}}
                  />
               </button>
            </div>
         </nav>

         {(renderModal)
            ? <ChangeNoteColorModal 
               noteID={noteID}
               closeModal={() => setRenderModal(false)}
            />
            : null
         }
      </>
   )
}
