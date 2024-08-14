import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavbarContainer = styled.div`
 display: flex;
 flex-wrap: wrap;
 align-items: center;
 justify-content: center;
 gap: 10rem;
 background-color: #BABF21;
`;

export const ListDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;

`;

export const StyledNavLink = styled(NavLink)`
display: inline-block;
  text-decoration: none;
  color: #F25C05;
  margin: 0 10px;
  font-size: 1.5rem;
  font-family: "Roboto";
  line-height: 2.5rem;
  box-shadow: 8px 8px 3px 1px rgba(0, 0, 0, 0.3);

 

  &.active {
    font-weight: bold;
    color: #A60303;
  }

  &:hover {
  transform: scale(1.1);
  color:  orangered;
   
  }
`;


export const UnorderedList = styled.ul`
 list-style-type: none  ;

`;

export default NavbarContainer;
