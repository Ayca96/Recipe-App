import styled from "styled-components";
import Foto from "../../images/mariana-medvedeva-usfIE5Yc7PY-unsplash.jpg";

const FotoDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #526C3F;
  font-size: 3rem;
  width: 100%;
  height: 100vh;
  background-image: url(${Foto});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
  
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column; /* Elemanları dikey olarak hizala */
  align-items: center;
  gap: 1rem; /* Elemanlar arasındaki boşluk */
  background-color: rgba(255, 255, 255, 0.5); /* Arka planı beyaz ve yarı saydam */
  padding: 2rem;
  border-radius: 10px; /* Köşeleri yuvarla */
  width: 80%;
  max-width: 600px; /* Maksimum genişlik */
`;


 export const Paragraf = styled.p`
  margin: 1rem 0;
  font-size: 2rem;
 

 `;


 export const StyledInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  outline: none;
`;

export const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  background-color: #526C3F;
  color: white;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: darkred; 
    transform: scale(.9);
    box-shadow: 10px 10px 5px 2px rgba(0, 0, 0, 0.5);

  }
`;
 

export const StyledSelect = styled.select`
padding: 0.5rem;
font-size: 1rem;
border: 1px solid #ccc;
border-radius: 5px;
width: 100%;
outline: none;
font-family: "tahoma";
`;

export default FotoDiv;
