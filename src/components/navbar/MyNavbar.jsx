import React from 'react'
import { NavLink } from 'react-router-dom';

const MyNavbar = () => {
  return (
    <div className='navContainer'>
      <div>Aycas Rezepte</div>

      <div>
        <ul>
          <li> <NavLink to="/"> STARTSEITE </NavLink> </li>
          <li> <NavLink to="/über-uns"> UBER UNS </NavLink> </li>
          <li> <NavLink to="/registirieren"> REGISTIRIEREN </NavLink> </li>
          <li> <NavLink to="/anmelden"> ANMELDEN </NavLink> </li>
        </ul>
      </div>
    </div>
  )
}

export default MyNavbar