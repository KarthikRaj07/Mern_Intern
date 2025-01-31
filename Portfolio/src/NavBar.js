import React from 'react'

import { Link, NavLink } from 'react-router-dom'

import './NavBar.css'

const NavBar = () => {

  return (

      
<>
        <nav>

            <Link to="/" className="li">Home</Link>

            <Link to="/about"  className="li">About</Link>

            <Link to="/skill"  className="li">Skill</Link>

            <Link to="/project"  className="li">Project</Link>

            <Link to="/certificate"  className="li">Certificate</Link>

            <Link to="/education"  className="li">Education</Link>
        </nav>

      </>

  )

}



export default NavBar