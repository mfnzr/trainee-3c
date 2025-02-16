import styled from 'styled-components';

const FooterPage = styled.footer`
    background-color: #fff;
    color: #3E444F;
    text-align: center;
    padding: 10px;
    margin-top: 50px;
    font-size: 14px;
    bottom: 0;
    width: 100vw;
    position: fixed;
`;

function Footer() {
    return (
        <FooterPage>
            <p>Desenvolvido por Maria Fernanda Ribeiro.</p>
            <p>Copyright © 2025 Trainee.</p>
        </FooterPage>
    );
}

export default Footer;