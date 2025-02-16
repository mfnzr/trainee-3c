import styled from "styled-components";
import { Link } from "react-router-dom";

const Option = styled.li`
    list-style: none;
    min-width: 120px;
    margin: 10px;
    font-size: 18px;
    text-align: center;
    padding: 5px;
    cursor: pointer;
    transition: color 0.3s ease, background-color 0.3s ease; 

    &:hover {
        color: white;
        background-color: #3E444F;
        border-radius: 5px;
    }
`;

const Options = styled.ul`
    display: flex;
    padding: 0;
    position: relative;
`;

const SubmenuContainer = styled.div`
    position: relative;
    display: inline-block;
`;

const Submenu = styled.ul`
    position: absolute;
    top: 40px;
    left: 0;
    background: white;
    border-radius: 5px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    padding: 10px;
    display: ${({ isVisible }) => (isVisible ? "block" : "none")};

    li {
        padding: 5px 10px;
        cursor: pointer;
        text-align: left;

        &:hover {
            background: #ddd;
        }
    }
`;

const textOptions = ["Cadastro", "Desenvolvedores"];

function OptionsHeader() {
    return (
        <Options>
            {textOptions.map((text, index) =>
                <Link to={`/${text.toLocaleLowerCase()}`} key={index} >
                    <Option>{text}</Option></Link>
            )
            }
        </Options>
    );
}

export default OptionsHeader;
