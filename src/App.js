import React from 'react'
import './App.css'
import Dropdown from './components/Dropdown'

function App() {
  const currPage = 0

  return (
    <nav className="container">
      <Dropdown currPage={currPage} />
    </nav>
  )
}

export default App
