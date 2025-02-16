import logo from '../../img/logo.png';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LogoImg = styled.img`
    width: 90px;
    height: 75px;
`;

function Logo() {
    return (
        <LogoContainer>
            <LogoImg
            src={logo}
            alt="logo"
            />
            <p><strong>3C </strong>Trainee</p>
        </LogoContainer>
    );
}

export default Logo;