import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'  //companenti dahil etme


createRoot(document.getElementById('root')).render(  //index.htmldeki root id'li div'i render ediyor.
  <>
    <App />
  </>,
)
