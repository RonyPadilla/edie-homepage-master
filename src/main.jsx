import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.css'
import Nav from '../src/components/Nav'
import { Info } from '../src/components/Info.jsx'
import { Services } from '../src/components/Services.jsx'
import { Business } from '../src/components/Business.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav/>
    <Info/>
    <Services/>
    <Business/>
  </React.StrictMode>,
)
