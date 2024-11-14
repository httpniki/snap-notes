import {noteColorPalette} from '../../utils/noteColorPalette'
import ColorPickerButton from './ColorPickerButton'

interface Props {
   closeModal: () => void
   noteID: string
}

export default function ChangeNoteColorModal({closeModal, noteID}: Props){
   return(
      <div id="note-change-color-modal">
         {
            noteColorPalette.map(el => {
               return <ColorPickerButton
                  key={el.name}
                  hex={el.hex}
                  noteID={noteID}
                  closeModal={closeModal}                 
               />
            })
         }
      </div>
   )
}
