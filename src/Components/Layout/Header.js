import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <Link className='linkStyle' to="/">Home</Link> | <Link className='linkStyle' to="/about">About</Link>
    </header>
  )
}

const headerStyle = {
  background: 'lightBlue',
  color: '#000',
  textAlign: 'center',
  padding: '10px'
}



export default Header