import styled from 'styled-components';

const Container = styled.div`
    height: 100%;
    width: 25%;
    min-width: 200px;
    box-sizing: border-box; 
    border-right: solid 1px ${props => props.theme.palette.neutral['200']};
    padding: 8px;
`;

const Menu = styled.div`
    height: 100%;
`;

export {
    Container,
    Menu,
};