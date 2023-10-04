import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FirstApp from './firstApp.jsx'
import { Challenge } from './Challenge.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <FirstApp value={0} />
    <Challenge />
  </React.StrictMode>,
)
