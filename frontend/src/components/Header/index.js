import { Link } from 'react-router-dom';
import Logo from '../Logo';
import OptionsHeader from './OptionsHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    color: #3E444F;
    display: flex;
    justify-content: center;
    background-color: #fff;
`;

function Header() {
    return (
        <HeaderContainer>
            <Link to="/">
                <Logo />
            </Link>
            <OptionsHeader />
        </HeaderContainer>
    );
}

export default Header;