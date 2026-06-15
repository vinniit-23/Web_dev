import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Cards from './Component/Cards.jsx'  
import Card from './Component/Card.jsx'
import Form from './Component/Form.jsx'


createRoot(document.querySelector("#Container")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
