import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './pages/App/App'
import { BrowserRouter as Router } from 'react-router-dom'
import 'react-tooltip/dist/react-tooltip.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)