import { apiClient } from './ApiClient';

export const executeJwtAuthenticationService
    = (username, password) =>
        apiClient.post(`/authenticate`, { username, password })

export const getUserId
    = (username) => apiClient.get(`/user/${username}/id`)

export const retrivePostForUser
    = (id) => apiClient.get(`/users/${id}/posts`);


export const retiveAllPosts = () => apiClient.get('/posts');