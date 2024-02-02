import {apiClient} from './ApiClient';

export const retiveAllPosts = () => apiClient.get('/posts');