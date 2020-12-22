import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'http://localhost:1337/'
});

export default clienteAxios;