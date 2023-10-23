import useNotes from "../../hooks/useNotes"

interface ColorPickerButtonProps {
   hex: string
   noteID: string
   closeModal: () => void
}

export default function ColorPickerButton({
   hex, 
   noteID, 
   closeModal
}: ColorPickerButtonProps) {
   const {updateNote} = useNotes()

   function onUpdateNoteColor() {
      updateNote({
         id: noteID,
         color: hex
      })
      closeModal()
   }

   return (
      <button 
         className="color-picker-btn"
         style={{backgroundColor: hex}}
         data-color = {hex}
         onClick={onUpdateNoteColor}
      >
         {hex}
      </button>
   )
}
