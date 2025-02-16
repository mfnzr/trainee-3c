import axios from 'axios';

const devsAPI = axios.create({
    baseURL: 'http://localhost:8000/devs',
});

async function getDevs() {
    const response = await devsAPI.get('/')

    return response.data;
}


export {
    getDevs,
};