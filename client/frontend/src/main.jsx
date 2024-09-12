import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <createBrowserRouter>
     <StrictMode>
      <App />
    </StrictMode>
  </createBrowserRouter>

)
