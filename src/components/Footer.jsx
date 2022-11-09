import React from 'react'
import { Link } from 'react-router-dom'


function footer() {
  return (
    <footer className='footer'>
      <div className="footer-nav">
        <h2>Explore</h2>
        <ul>
          <Link to='/'>
          <li>Home</li>
          </Link>
          <Link to='about'>
          <li>About</li>
          </Link>
          <Link to='course'>
          <li>Course</li>
          </Link>
          <Link to='blog'>
          <li>Blog</li>
          </Link>
        </ul>
      </div>
      <div className="footer-media">
        <h2>Closer with me. Do you have some feedback or suggestions?</h2>
        <h3>You can also reach me on Social Media</h3>
            
      </div> 
    </footer>
  )
}

export default footer