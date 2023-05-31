import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import router from './router/router.jsx'
import { RouterProvider } from 'react-router-dom'
import { initializeApp } from 'firebase/app'
import config from './config/firebase.js'
initializeApp(config)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
