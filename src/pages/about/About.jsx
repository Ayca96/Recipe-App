import React from 'react'
import StyledAbout, { StyledButton, StyledInputs, StyledPar } from './style'

const About = () => {
  return (
    <div>
      <StyledAbout>
      <StyledPar>MEINE REZEPTE</StyledPar>
    
       <StyledInputs type="text" placeholder='Benutzername'/> 
       <StyledInputs type="passwort" placeholder='Passwort' />
       <StyledButton>EINLOGGEN</StyledButton>

      </StyledAbout>
    </div>
  )
}

export default About