import axios from "axios";

export const makeRequest = axios.create({
    baseURL: 'http://localhost:8800/apiForum/',
    // verificar si se usarán credenciales
})