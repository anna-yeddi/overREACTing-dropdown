import React from 'react'
import './App.css'
import Dropdown from './components/Dropdown'

function App() {
  const currPage = 0
  const options = [
    'Profile Information',
    'Change Password',
    'Become PRO',
    'Help',
    'Log Out',
  ]

  return (
    <nav className="container">
      <Dropdown currPage={currPage} options={options} />
    </nav>
  )
}

export default App
