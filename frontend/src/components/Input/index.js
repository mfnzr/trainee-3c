import styled from 'styled-components';

const Input = styled.input`
    order: 1px solid #3E444F;
    background-color: transparent;
    border: 1px solid rgba(175, 176, 177, 0.29);
    border-radius: 50px;
    width: 50%;
    color: #fff;
    font-size: 14px;
    margin-bottom: 10px;
    padding: 10px;

    &::placeholder {
        color:rgba(255, 255, 255, 0.66)  ;
        font-size: 14px;
    }


`;


export default Input;