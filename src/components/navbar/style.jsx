import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavbarContainer = styled.div`
 display: flex;
 flex-wrap: wrap;
 align-items: center;
 justify-content: space-between;
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
  color: blue;
  margin: 0 10px;
 

  &.active {
    font-weight: bold;
    color: red;
  }

  &:hover {
    text-decoration: underline;
   
  }
`;


export const UnorderedList = styled.ul`
 list-style-type: none  ;

`;

export default NavbarContainer;
