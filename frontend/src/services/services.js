import axios from 'axios';

const levelsAPI = axios.create({
    baseURL: 'http://localhost:8000/levels',
});

const getLevels = async () => {
    const response = await levelsAPI.get('/'); 
    return response.data;
};

export {
    getLevels,
};