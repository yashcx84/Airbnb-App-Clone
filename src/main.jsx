import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './Nav.jsx'
import Middle from './middle.jsx'
import Map from './Map'
import Foot from "./Foot.jsx"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Middle />
    <Middle />
    <Middle />
    <Middle />
    <Map />
    <Foot />
  </React.StrictMode>,
)
