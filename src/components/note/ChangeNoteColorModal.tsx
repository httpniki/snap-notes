import {NoteColorPalette} from '../../consts/note-color-palette'
import ColorPickerButton from './ColorPickerButton'
import ColorPickersWrapper from './ColorPickersWrapper'

interface ChangeNoteColorModalProps {
   closeModal: () => void
   noteID: string
}

export default function ChangeNoteColorModal({closeModal, noteID}: ChangeNoteColorModalProps){
   return(
      <ColorPickersWrapper>
         {
            NoteColorPalette.map(el => {
               return <ColorPickerButton
                  key={el.name}
                  hex={el.hex}
                  noteID={noteID}
                  closeModal={closeModal}                 
               />
            })
         }
      </ColorPickersWrapper>
   )
}
