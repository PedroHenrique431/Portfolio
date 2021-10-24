import React, {useState} from 'react';
import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';


const Navbar = ({toggle }) => {
    return (
        <>
         <Nav>
             <NavbarContainer>
                 <NavLogo to='/'>PedroHbs</NavLogo>
                 <MobileIcon onClick={toggle}>
                     <FaBars />
                 </MobileIcon>
                 <NavMenu>
                     <NavItem>
                         <NavLinks to='github'>Github</NavLinks>
                     </NavItem>
                     <NavItem>
                         <NavLinks to='contato'>Contato</NavLinks>
                     </NavItem>
                 </NavMenu>
             </NavbarContainer>
         </Nav>
        </>
    )
}

export default Navbar