import styled from 'styled-components';

const CreateButton = styled.button`
    background-color: #fffff;
    color: #3E444F;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;

    &:hover {
        background-color:rgb(199, 199, 199);
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    }
`;

function CreateDevelopeButton() {
    return (
        <CreateButton>Cadastrar novo desenvolvedor</CreateButton>
    );
}

export default CreateDevelopeButton;