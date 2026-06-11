import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card3 from './Component/Card3.jsx'
  
createRoot(document.querySelector("#Container")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
