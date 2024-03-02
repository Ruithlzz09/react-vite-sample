import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Notification from './wrappers/notification.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
   <Notification/>
  </React.StrictMode>,
)
