import axios from "axios";

export const makeRequest = axios.create({
    baseURL: 'http://localhost:3001/apiForum/',
    // verificar si se usarán credenciales
})