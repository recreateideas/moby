import React from 'react';
import { Container } from './styles';
import SideBarHeader from './SideBarHeader';
import MainMenu from './MainMenu';
import Settings from './Settings';

const SideBar = () => (
    <Container
        className="main-menu"
    >
        <SideBarHeader />
        <MainMenu />
        <Settings />
    </Container>
);

export default SideBar;
