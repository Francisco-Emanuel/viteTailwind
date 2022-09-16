import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import SideBar from './SideBar'
import LandPage from './LandPage'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SideBar />
    <LandPage />
    <App />
  </React.StrictMode>
)
