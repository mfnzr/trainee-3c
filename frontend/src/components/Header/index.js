import Logo from '../Logo';
import OptionsHeader from './OptionsHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    color: #3E444F;
    display: flex;
    justify-content: center;
    background-color: #fff;
`;

function Header({ setFilterLevel }) {
    return (
        <HeaderContainer>
            <Logo />
            <OptionsHeader setFilterLevel={setFilterLevel} />
        </HeaderContainer>
    );
}

export default Header;