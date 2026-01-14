import { useState } from 'react'
import { SideBar } from './SideBar'
import { NavBar } from './NavBar'
import { DashBoard } from './DashBoard'

function App() {


  return (
    
      <div className='app bg-light bg-gradient vh-100'>

        
        <NavBar />
        <div className='container row'>
        <SideBar />
        <DashBoard />
        </div>
      </div>
    
  )
}

export default App
