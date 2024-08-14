import styled from 'styled-components';
import RegisterFoto from "../../images/brooke-lark-08bOYnH_r_E-unsplash.jpg"

const StyledRegister = styled.div`
width: 100%;
height: 100vh;
background-image: url(${RegisterFoto});
background-size: cover;
background-position: left;
background-repeat: no-repeat;
display: flex; /* Flexbox kullanımı */
  align-items: center; /* Dikeyde ortalar */
  justify-content: flex-end; /* Yatayda sağa hizalar */
  padding: 2rem; /* İçerikten kenarlara boşluk ekler */
  box-sizing: border-box; 
`;


export const StyledParagraf= styled.p`
max-width: 350px;
width: 100%;
text-align: center;
font-size: 1rem;
margin: auto 9rem;
font-family: 'Roboto', sans-serif;
line-height: 1.6rem;


`;
export default StyledRegister;
