import React from 'react'
import Link from 'next/link'

const navBarStyle = {
  backgroundColor: 'lightblue',
  color: 'white',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-evenly',
}

const navItemStyle = {
  color: 'white',
}

export default () => (
  <nav style={navBarStyle}>
    <div>
      <Link href="/">
        <a title="Home" style={navItemStyle}>
          <h1>Home</h1>
        </a>
      </Link>
    </div>
    <div>
      <Link href="/communities/apage">
        <a title="A Page" style={navItemStyle}>
          <h1>A Page</h1>
        </a>
      </Link>
    </div>
  </nav>
)
