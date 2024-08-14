import React from 'react'
// import { NavLink } from 'react-router-dom';
import NavbarContainer, { ListDiv, StyledNavLink, UnorderedList } from './style'; 
import Logo from "../../images/AYCAS REZEPTE.png"

const MyNavbar = () => {
  return (
    <NavbarContainer className='navContainer'>
      <div><img src={Logo} alt="" width="170px" height="170px" style={{borderRadius:"50%"}} /></div>

      <ListDiv>
        <UnorderedList>
          <li> <StyledNavLink to="/"> STARTSEITE </StyledNavLink> </li>
          <li> <StyledNavLink to="/über-uns"> UBER UNS </StyledNavLink> </li>
          <li> <StyledNavLink to="/registirieren"> REGISTIRIEREN </StyledNavLink> </li>
          <li> <StyledNavLink to="/über-uns"> ANMELDEN </StyledNavLink> </li>
        </UnorderedList>
      </ListDiv>
    </NavbarContainer>
  )
}

export default MyNavbar