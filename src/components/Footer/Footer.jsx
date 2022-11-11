import React from 'react'
import { Link } from 'react-router-dom'
import  ICInstagram  from '../../assets/instagram.png'
import  ICLinkedin  from '../../assets/linkedin.png'
import  ICGmail  from '../../assets/gmail.png'
import './Footer.css'


function footer() {
  return (
    <footer className='footer'>
      <div className="footer-nav">
        <h2>Explore</h2>
        <ul>
          <Link to='/' style={{textDecoration: 'none'}}>
          <li className='li'>Home</li>
          </Link>
          <Link to='about' style={{textDecoration: 'none'}}>
          <li>About</li>
          </Link>
          <Link to='course' style={{textDecoration: 'none'}}>
          <li>Course</li>
          </Link>
          <Link to='blog' style={{textDecoration: 'none'}}>
          <li>Blog</li>
          </Link>
        </ul>
      </div>
      <div className="footer-media">
        <div className="footer-media-description">
        <h2>Closer with me. Do you have <br /> some feedback or suggestions?</h2>
        <h3>You can also reach me on Social Media</h3>
        </div> 

        <div className="footer-media-social" style={{display:'flex'}}>
          <a href="https://www.instagram.com/meilyanaanisaa">
          <img src={ICInstagram}/>
          </a>

          <a href="https://www.linkedin.com/in/meilyana-anisa-mawarti">
          <img src={ICLinkedin} />
          </a>

          <a href="https://meilyanaanisa@gmail.com">
          <img src={ICGmail} />
          </a>
        </div>
      </div> 

    </footer>
  )
}

export default footer