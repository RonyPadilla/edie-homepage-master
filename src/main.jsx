import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.css'
import Nav from '../src/components/Nav'
import { Info } from '../src/components/Info.jsx'
import { Services } from '../src/components/Services.jsx'
import { Business } from '../src/components/Business.jsx'
import { Team } from '../src/components/Team.jsx'
import { Task } from '../src/components/Task.jsx'
import { Footer } from '../src/components/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav/>
    <Info/>
    <Services/>
    <Business/>
    <Team/>
    <Task/>
    <Footer/>
  </React.StrictMode>,
)
