export interface Note {
   content: string
   color: string
   isEditable: boolean
   id: string
}

export interface NotesContextValue {
   notes: Note[]
   createNote: () => void
   updateNote: (props: UpdateNoteProps) => void
   deleteNote: (id: Note['id']) => void
}

export interface NotesProviderProps extends NotesContext {
   children: React.ReactNode
}

export interface UpdateNoteProps {
   content?: Note['content'],
   color?: Note['color']
   isEditable?: Note['isEditable'],
   id: Note['id']
}
