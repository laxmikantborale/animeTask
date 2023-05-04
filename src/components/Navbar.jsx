import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <Link to="/"><img src="https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/62a73303a1d153616957be6d_Anime-logo-p-500.png" alt='logo' /></Link>
        <img src="https://i.pinimg.com/474x/f9/a0/6d/f9a06dd1014d399da470e7264932b671.jpg" alt='logo2' />
      </div>
      <div className='nav-detail'>
        <a href='/'>Home</a>
        <a href='/'>About</a>
        <a href='/'>Blog</a>
      </div>
    </div>
  )
}

export default Navbar;