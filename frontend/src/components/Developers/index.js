import { useState, useEffect } from "react";
import styled from "styled-components";
import { format } from "date-fns";

const DevelopersContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #333;
    text-align: center;
    padding: 30px 20px;
    min-height: 80vh;
    width: 100vw;
    background-color: #f4f7fc;
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
    flex-direction: column;
    
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
    }
`;

const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ModalContent = styled.div`
    background: #ffffff;
    padding: 30px;
    border-radius: 10px;
    width: 400px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const ModalTitle = styled.h2`
    color: #333;
    font-size: 24px;
    margin-bottom: 20px;
`;

const Input = styled.input`
    width: 100%;
    padding: 12px;
    margin: 8px 0;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
    transition: all 0.3s ease;

    &:focus {
        border-color: #007bff;
        box-shadow: 0 0 5px #3E444F;
    }
`;

const Select = styled.select`
    width: 100%;
    padding: 12px;
    margin: 8px 0;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
    transition: all 0.3s ease;

    &:focus {
        border-color: #007bff;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
`;

const Button = styled.button`
    background-color: #3E444F;
    color: white;
    border: none;
    padding: 12px 20px;
    margin-top: 15px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color:rgb(126, 147, 185);
    }

    &:active {
        background-color: #3E444F;
    }
`;

const CancelButton = styled(Button)`
    background-color: #6c757d;
    margin-top: 10px;

    &:hover {
        background-color: #5a6268;
    }

    &:active {
        background-color: #4e555b;
    }
`;

function Developers() {
    const [developers, setDevelopers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [levels, setLevels] = useState([]);
    const [newDev, setNewDev] = useState({
        name: "",
        age: "",
        gender: "",
        date_of_birth: "",
        hobby: "",
        level: ""
    });
    const [editDev, setEditDev] = useState(null);  // Estado para o desenvolvedor a ser editado
    useEffect(() => {
        if (editDev) {
            setNewDev({
                name: editDev.name,
                age: editDev.age,
                gender: editDev.gender,
                date_of_birth: editDev.date_of_birth,
                hobby: editDev.hobby,
                level: levels.find(l => l.level === editDev.level)?.id || ""
            });
        }
    }, [editDev]);


    useEffect(() => {
        fetch("http://localhost:8000/devs")
            .then(response => response.json())
            .then(data => setDevelopers(data))
            .catch(error => console.error("Erro ao carregar desenvolvedores:", error));

        setLevels([
            { id: 1, level: "Júnior" },
            { id: 2, level: "Pleno" },
            { id: 3, level: "Sênior" }
        ]);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewDev({ ...newDev, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Verifica se todos os campos estão preenchidos
        if (!newDev.name || !newDev.age || !newDev.gender || !newDev.date_of_birth || !newDev.hobby || !newDev.level) {
            alert("Todos os campos devem ser preenchidos!");
            return;
        }

        if (editDev) {
            // Atualiza o desenvolvedor existente
            const updatedDev = {
                ...newDev,
                id: editDev.id,
                level: levels.find(l => l.id === parseInt(newDev.level))?.level || "",
                updatedAt: new Date().toISOString()
            };

            fetch(`http://localhost:8000/devs/${newDev.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newDev),
            })
            .then(response => response.json()) // Espera a resposta como JSON
            .then(data => {
                if (data.message) {
                    alert(data.message); // Exibe a mensagem retornada do backend
                }
                setIsModalOpen(false);
                // Atualiza o desenvolvedor na lista, por exemplo
                setDevelopers(prevDevs => prevDevs.map(dev => dev.id === newDev.id ? newDev : dev));
            })
            .catch(error => {
                console.error("Erro ao atualizar desenvolvedor:", error);
                alert('Erro ao atualizar desenvolvedor!');
            });
        } else {

            const newDeveloper = {
                id: developers.length + 1,
                ...newDev,
                level: levels.find(l => l.id === parseInt(newDev.level))?.level || "", // Converte o level para número
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };
        

        fetch("http://localhost:8000/devs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newDeveloper)
        })
            .then(async (response) => {
                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(errorText);
                }
                return response.text();
            })
            .then(data => {
                // Se a resposta for JSON, atualiza a lista de desenvolvedores
                setDevelopers(prevDevelopers => [...prevDevelopers, data]);
                alert("Desenvolvedor cadastrado com sucesso!");
                alert("Por favor atualize a página para ver as alterações");
                setIsModalOpen(false); // Fecha o modal
            })
            .catch(error => {
                console.error("Erro ao cadastrar desenvolvedor:", error);
                alert(error.message); // Exibe a mensagem de erro
            });
        }
    };




    //NÃO CONSEGUI FAZER FUNCIONAR
    const handleEdit = (dev) => {
        setNewDev({
            ...dev,
            level: levels.find(level => level.level === dev.level)?.id || ""
        });
        setIsModalOpen(true);
    };

    const handleDelete = (id) => {
        console.log(id); //para mostrar o id da exclusão no console
        fetch(`http://localhost:8000/devs/${id}`, {
            method: "DELETE"
        })
            .then(response => {
                if (!response.ok) {
                    return response.text().then(text => { throw new Error(text) });
                }
                setDevelopers(developers.filter(dev => dev.id !== id));
                alert("Desenvolvedor excluído com sucesso!");
            })
            .catch(error => console.error("Erro ao excluir desenvolvedor:", error));
    };


    return (
        <DevelopersContainer>
            <h1>Desenvolvedores cadastrados</h1>
            <CardsWrapper>
                {developers.map((dev) => (
                    <Card key={dev.id}>
                        <h2>{dev.name}</h2>
                        <p><strong>Idade:</strong> {dev.age}</p>
                        <p><strong>Gênero:</strong> {dev.gender}</p>
                        <p><strong>Nascimento:</strong> {dev.date_of_birth ? format(new Date(dev.date_of_birth), "dd/MM/yyyy") : ""}</p>
                        <p><strong>Hobby:</strong> {dev.hobby}</p>
                        <p><strong>Nível:</strong> {dev.level}</p>
                        <Button onClick={() => handleDelete(dev.id)}>Excluir</Button>
                        <Button onClick={() => handleEdit(dev)} disabled={isModalOpen}>Editar</Button>
                        </Card>

                ))}
            </CardsWrapper>
            <Button onClick={() => setIsModalOpen(true)}>Cadastrar</Button>
            {isModalOpen && (
                <Modal>
                    <ModalContent>
                        <ModalTitle>Cadastrar Desenvolvedor</ModalTitle>
                        <form onSubmit={handleSubmit}>
                            <Input type="text" name="name" placeholder="Nome" onChange={handleInputChange} required />
                            <Input type="number" name="age" placeholder="Idade" onChange={handleInputChange} required />
                            <Input type="text" name="gender" placeholder="Gênero" onChange={handleInputChange} required />
                            <Input type="date" name="date_of_birth" onChange={handleInputChange} required />
                            <Input type="text" name="hobby" placeholder="Hobby" onChange={handleInputChange} required />
                            <Select name="level" onChange={handleInputChange} required>
                                <option value="">Selecione um nível</option>
                                {levels.map((lvl) => (
                                    <option key={lvl.id} value={lvl.id}>{lvl.level}</option>
                                ))}
                            </Select>
                            <Button type="submit">Cadastrar</Button>
                            <CancelButton type="button" onClick={() => setIsModalOpen(false)}>Cancelar</CancelButton>
                        </form>
                    </ModalContent>
                </Modal>
            )}
        </DevelopersContainer>
    );
}

export default Developers;