import { NavLink } from 'react-router-dom'
import './NavBar.css'


function NavBar() {
  return (
    <nav className='navbar'>
    <h2>Meilyana ~ </h2>
    <ul>
        <NavLink to='/' style={{textDecoration: 'none'}}>
        <li>Home</li>
        </NavLink>

        <NavLink to='about' style={{textDecoration: 'none'}}>
        <li>About</li>
        </NavLink>

        <NavLink to='course' style={{textDecoration: 'none'}}>
        <li>Course</li>
        </NavLink>

        <NavLink to='blog' style={{textDecoration: 'none'}}>
        <li>Blog</li>
        </NavLink>
        </ul>
    </nav>
  )
}

export default NavBar