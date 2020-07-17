import NavBar from './NavBar'
import React from 'react'

const headerStyle = {
  backgroundColor: 'lightBlue',
  color: 'white',
  width: '100%',
  height: '50px',
  display: 'flex',
}

const Header = () => (
  <div style={headerStyle}>
    <NavBar />
  </div>
)

export default Header
