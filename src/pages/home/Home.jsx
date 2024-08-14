import React from 'react'

import FotoDiv, { FormWrapper, Paragraf, StyledButton, StyledInput, StyledSelect } from './style'

const Home = () => {
  return (
    <div>
     
      <FotoDiv>
   
         <FormWrapper>
            <Paragraf>AYCAS REZEPTE</Paragraf>
          <StyledInput type="text" placeholder='Suche nach einem Rezept' />
          
          <label htmlFor=""></label>
          <StyledSelect name="FRÜHSTÜCK" id="kahvalti">
            <option value="FRÜHSTÜCK">FRÜHSTÜCK</option>
            <option value="MITTAGESSEN">MITTAGESSEN</option>
            <option value="ABENDESSEN">ABENDESSEN</option>
            <option value="SNACKS">SNACKS</option>
            <option value="BRUNCH">BRUNCH</option>
            <option value="TEEZEIT">TEEZEIT</option>
          </StyledSelect>

          <StyledButton>SUCHEN</StyledButton>
         </FormWrapper>
      
        
      </FotoDiv>  
     
      
    </div>
  )
}

export default Home