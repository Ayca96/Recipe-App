import React from 'react'
// import { NavLink } from 'react-router-dom';
import NavbarContainer, { ListDiv, StyledNavLink, UnorderedList } from './style'; 

const MyNavbar = () => {
  return (
    <NavbarContainer className='navContainer'>
      <div>Aycas Rezepte</div>

      <ListDiv>
        <UnorderedList>
          <li> <StyledNavLink to="/"> STARTSEITE </StyledNavLink> </li>
          <li> <StyledNavLink to="/über-uns"> UBER UNS </StyledNavLink> </li>
          <li> <StyledNavLink to="/registirieren"> REGISTIRIEREN </StyledNavLink> </li>
          <li> <StyledNavLink to="/anmelden"> ANMELDEN </StyledNavLink> </li>
        </UnorderedList>
      </ListDiv>
    </NavbarContainer>
  )
}

export default MyNavbar