import Input from '../Input';
import styled from 'styled-components';
import { useState } from 'react';
import { dbDevs } from './dbDevs';

const SearchContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    text-align: center;
    padding: 30px 20px; 
    min-height: 5vh; 
    width: 100vw;
`;

const Titulo = styled.h3`
    color: #fff;
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 15px;
`;

const SearchInput = styled(Input)`
    width: 500px;
    padding: 20px;
    font-size: 16px;
    border-radius: 25px;
    border: 1px solid #ccc;
    outline: none;
    transition: 0.3s;

    &:focus {
        border-color: #007bff;
        box-shadow: 0 0 8px rgba(0, 123, 255, 0.5);
    }
`;

const ResultsContainer = styled.div`
    margin-top: 30px; /* Maior espaçamento entre pesquisa e resultados */
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
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

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
    }

    p {
        margin: 5px 0;
        font-size: 14px;
    }

    strong {
        font-weight: 600;
    }
`;

function Search() {
    const [devSearch, setDevSearch] = useState([]);

    return (
        <SearchContainer>
            <Titulo>Pesquise por desenvolvedores cadastrados</Titulo>
            <SearchInput
                placeholder="Pesquise por desenvolvedores"
                onBlur={(evento) => {
                    const devSearch = evento.target.value.trim();
                    if (devSearch === '') {
                        setDevSearch([]);
                        return;
                    }
                    const resultSearch = dbDevs.filter(dev => dev.name.toLowerCase().includes(devSearch.toLowerCase()));
                    setDevSearch(resultSearch);
                }}
            />
            <ResultsContainer>
                {devSearch.map((dev) => (
                    <Card key={dev.id}>
                        <p><strong>Nome:</strong> {dev.name}</p>
                        <p><strong>Idade:</strong> {dev.age}</p>
                        <p><strong>Gênero:</strong> {dev.gender}</p>
                        <p><strong>Nascimento:</strong> {dev.date_of_birth}</p>
                        <p><strong>Hobby:</strong> {dev.hobby}</p>
                        <p><strong>Nível:</strong> {dev.level.level}</p>
                    </Card>
                ))}
            </ResultsContainer>
        </SearchContainer>
    );
}

export default Search;
