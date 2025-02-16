import { useState } from "react";
import { dbDevs } from './dbDevelopers';
import styled from "styled-components";
import CreateDevelopeButton from "../Button";

const DevelopersContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    text-align: center;
    padding: 30px 20px; 
    min-height: 50vh; 
    width: 100vw;
    background-color: #fffff;  

    div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
    }
`;

const CardsWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;
    max-width: 1200px;
`;

const Card = styled.div`
    background: #fff;
    color: #333;
    border-radius: 10px;
    padding: 15px;
    width: 250px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    text-align: left;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column; /* Garante que os elementos fiquem empilhados */
    
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
    }

    h2 {
        margin-bottom: 10px;
        font-size: 18px;
    }

    div {
        display: flex;
        flex-direction: column; /* Faz com que os elementos dentro fiquem em coluna */
        gap: 5px; /* Ajusta o espaço entre os itens */
    }

    p {
        margin: 0;
        font-size: 14px;
    }
`;



function Developers() {
    const [filterLevel, ] = useState(""); 

    const filteredDevs = filterLevel
        ? dbDevs.filter((dev) => dev.level.level === filterLevel)
        : dbDevs;

    return (
        <DevelopersContainer>
            
            <h1>Desenvolvedores cadastrados</h1>
            <CardsWrapper>
                {filteredDevs.map((dev) => (
                    <Card key={dev.id}>
                        <h2>{dev.name}</h2>
                        <div>
                            <p><strong>Idade:</strong> {dev.age}</p>
                            <p><strong>Gênero:</strong> {dev.gender}</p>
                            <p><strong>Nascimento:</strong> {dev.date_of_birth}</p>
                            <p><strong>Hobby:</strong> {dev.hobby}</p>
                            <p><strong>Nível:</strong> {dev.level.level}</p>
                        </div>
                    </Card>
                ))}
            </CardsWrapper>
            <CreateDevelopeButton />
        </DevelopersContainer>
    );
}

export default Developers;
