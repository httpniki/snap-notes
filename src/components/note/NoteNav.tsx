import {useState} from "react";
import useNotes from "../../hooks/useNotes";
import {Note} from "../../types/types";
import changeNoteNavElementsColor from "../../utils/changeNoteNavElementsColor";
import LockSVG from "../assets/LockSVG";
import PalleteSVG from "../assets/PaletteSVG";
import TrashSVG from "../assets/TrashSVG";
import UnlockSVG from "../assets/UnlockSVG";
import ChangeNoteColorModal from "./ChangeNoteColorModal";

interface Props {
   noteID: Note['id']
   isEditable: Note['isEditable']
   color: string
   contentLength: number
}

export default function NoteNav({noteID, isEditable, color, contentLength}: Props) {
   const {deleteNote, updateNote} = useNotes()
   const [renderModal, setRenderModal] = useState(false)
   const elementColors = changeNoteNavElementsColor(color)

   return(
      <>
         <nav style={{backgroundColor: color}}>
            <span 
               id="note-content-length"
               style={{color: elementColors}}
            >
               {contentLength}
            </span>

            <div id="note-nav-btn-container">
               <button 
                  id="delete-note-btn"
                  onClick={() => deleteNote(noteID)}
               > 
                  <TrashSVG
                     style={{fill: elementColors}}   
                  />
               </button>

               <button 
                  id="protect-note-btn"
                  onClick={() => updateNote({ isEditable: !isEditable, id: noteID })}
               >
                  {(isEditable)
                     ? <UnlockSVG
                        style={{stroke: elementColors}}
                     />
                     : <LockSVG
                        style={{stroke: elementColors}}
                     />
                  }
               </button>

               <button 
                  id="change-note-color-btn"
                  onClick={() => setRenderModal(true)}
               >
                  <PalleteSVG style={{fill: elementColors}}/>
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
