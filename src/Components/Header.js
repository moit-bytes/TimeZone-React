import React from 'react'
import nav_logo from '../Images/nav_logo.jpg'
import './Decor.css'


export const Header = (props) => {
  return (
    <div>
    <nav className='nav'>
        <img src={nav_logo} alt="Nav Logo" className='nav--image'/>
        <h3 className='nav--title'>{props.title}</h3>
    </nav>
    <h3 className='page--title'>Welcome Moit!</h3>
    </div>

  )
}
