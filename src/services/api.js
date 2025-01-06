import axios from 'axios'; 
// por padrão o axios não vem instalado, é nessesario caso deseje usar api 

export const api = axios.create({
    baseURL: '', // URL da API 
    headers: {
        "Content-Type": 'application/json'
    }
});
export const apiMoedas = axios.create({
    baseURL: 'https://economia.awesomeapi.com.br/json/last', // URL da API 
    headers: {
        "Content-Type": 'application/json'
    }
});

