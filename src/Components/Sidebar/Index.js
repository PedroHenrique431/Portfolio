import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu} from './SidebarElements'

function Sidebar({isOpen, toggle}) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='github' onClick={toggle}>GitHub</SidebarLink>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarLink to='contato' onClick={toggle}>Contato</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
