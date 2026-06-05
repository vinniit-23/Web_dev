import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Task from './Components/Task.jsx'
import Todo from './Components/Todo.jsx'
// main.jsx or App.jsx
  
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
   </StrictMode>,
)
