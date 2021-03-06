import React from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../../redux';
import { Container } from './styles';
import { RecursiveMenu } from '../../../components';
import { routes } from '../../../routes';

const MainMenu = () => {
    const dispatch = useDispatch();
    const {
        fourOFour, projectEditYaml, settings, ...menuRoutes
    } = routes;
    const { router: { navigateTo } } = actions;
    const { location: { pathname } } = window;
    const onSelect = (item) => {
        const { path } = item;
        dispatch(navigateTo(path));
    };
    const setIsActive = item => item.path === pathname;
    return (
        <Container>
            <RecursiveMenu
                items={menuRoutes}
                onSelect={onSelect}
                setIsActive={setIsActive}
            />
        </Container>
    );
};

export default MainMenu;
