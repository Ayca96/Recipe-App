import React, { useState } from 'react'
import { Hamburger, Logo, Menu, MenuLink, Nav } from './NavbarStyles'
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {

  const[open,setOpen]=useState(false)
  return (
    <Nav>
      <Logo to="/home">
      <p style={{ }}>Mama</p>
      </Logo>
      <Hamburger onClick={() => setOpen(!open)}>
        <GiHamburgerMenu />
      </Hamburger>

      <Menu osman={open} onClick={() => setOpen(!open)}>
        <MenuLink to="/about">About</MenuLink>
        {/* <MenuLink>Github</MenuLink> */}
        <a href="https://github.com/" target="blank">
          Github
        </a>
        <MenuLink to="/">Logout</MenuLink>
      </Menu>
    </Nav>
  );
}

export default Navbar