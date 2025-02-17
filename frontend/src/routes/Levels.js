import styled from 'styled-components';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { getLevels } from '../services/services';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #3E444F;
`;

function Levels() {
  const [levels, setLevels] = useState([]);

  useEffect(() => {
    async function fetchLevels() {
      const levelsFromAPI = await getLevels();
      setLevels(levelsFromAPI);
    };

    fetchLevels();

  }, []);

  return (
    <AppContainer>
      {levels.map(level => <h1 key={level.id}>{level.name}</h1>)}
      <Footer />
    </AppContainer>
  );
}

export default Levels;

