import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';


const Navbar = ({toggle }) => {
    return (
        <>
         <Nav>
             <NavbarContainer>
                 <NavLogo id='inicio'>PedroHbs</NavLogo>
                 <MobileIcon onClick={toggle}>
                     <FaBars />
                 </MobileIcon>
                 <NavMenu>
                     <NavItem>
                         <NavLinks to='Trabalhos'>Meus trabalhos</NavLinks>
                     </NavItem>
                     <NavItem>
                         <NavLinks to='Habilidades'>Habilidades</NavLinks>
                     </NavItem>
                     <NavItem>
                         <NavLinks to='Contato'>Contato</NavLinks>
                     </NavItem>
                     
                 </NavMenu>
             </NavbarContainer>
         </Nav>
        </>
    )
}

export default Navbar
