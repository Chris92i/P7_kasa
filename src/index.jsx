import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// récupere la div id root et fait le rendu de APP dans la div
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
