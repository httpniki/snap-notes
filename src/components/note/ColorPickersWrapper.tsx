interface ColorPickersWrapperProps {
   children: React.ReactNode
}

const ColorPickersWrapper = ({children}: ColorPickersWrapperProps) => {
   return (
      <div id="note-change-color-modal">
         {children}
      </div>
   )
}

export default ColorPickersWrapper
