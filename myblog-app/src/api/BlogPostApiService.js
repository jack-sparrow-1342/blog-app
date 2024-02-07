import { apiClient } from './ApiClient';

export const executeJwtAuthenticationService
    = (username, password) =>
        apiClient.post(`/authenticate`, { username, password })

export const getUserId
    = (username) => apiClient.get(`/user/${username}/id`)

export const retrivePostForUser
    = (id) => apiClient.get(`/users/${id}/posts`);

export function register(formData){
    const regDetails = {
        name: formData.fullName,
        email: formData.email,
        password: formData.password
    }
    return apiClient.post(`/register`, regDetails);
}

export const retiveAllPosts = () => apiClient.get('/posts');