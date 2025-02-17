import styled from 'styled-components';

const FooterPage = styled.footer`
    background-color: #3E444F;
    color: #ffffff;
    text-align: center;
    padding: 10px;
    margin-top: 50px;
    font-size: 14px;
    width: 100%;
    margin-top: auto; /* Adiciona espaço para empurrar o footer para o fim */
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
