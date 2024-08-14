import styled from 'styled-components';
import AboutFoto from "../../images/brooke-lark-AgD6OBNXF0Q-unsplash.jpg"

const StyledAbout = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  width: 100%;
  height: 100vh;
 background-image: url(${AboutFoto});
 background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat;
`;

export const StyledPar = styled.p`
  color: black;
  border-radius: 1rem;
  padding: 14px;
  background-color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;

`;

export const StyledInputs = styled.input`

width: 250px;
height: 50px;
outline: none;
border-radius: 1rem;
margin: 1rem;
font-size: 1.3rem;
font-family: "tahamo";

`;

export const StyledButton= styled.b`

width: 150px;
height: 50px;
outline: none;
border-radius: 1rem;
margin: 1rem;
font-size: 1.3rem;
font-family: "tahamo";
background-color: #EA51AC;
text-align: center;
padding: 0.8rem;

&:hover{
  background-color: #F5DBCF;
  cursor: pointer;
  transform: scale(1.1);
}

`;

export default StyledAbout;
