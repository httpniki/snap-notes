import useNotes from "../../hooks/useNotes"

interface Props {
   hex: string
   noteID: string
   closeModal: () => void
}

export default function ColorPickerButton({
   hex, 
   noteID, 
   closeModal
}: Props) {
   const {updateNote} = useNotes()

   function handleUpdateNoteColor() {
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
         onClick={handleUpdateNoteColor}
      >
         {hex}
      </button>
   )
}
