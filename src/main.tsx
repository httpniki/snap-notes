import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {NotesProvider} from './context/NotesContext.js'

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <NotesProvider>
         <App />
      </NotesProvider>
   </React.StrictMode>
)
