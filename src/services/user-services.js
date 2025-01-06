
import { api } from './api'

export async function registerUser(data) {
    const result = await api.post('/register', data);
    sessionStorage.setItem('token', JSON.stringify(result.data.accessToken));
}
export async function LoginUser(data) {
    const result = await api.post('/login', data);
    sessionStorage.setItem('token', JSON.stringify(result.data.accessToken));
   
}
export async function getUser() {
    const accessToken = sessionStorage.getItem('token');
    const result = await api.get('/usuarios', {
        headers: {
            'Authorization': `Bearer ${JSON.parse(accessToken)}`
        }
    });
    return result;
}