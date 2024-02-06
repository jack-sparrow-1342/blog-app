import axios from "axios";

export const apiClient = axios.create(
    {
        baseURL: 'http://blogster-app-rest-services-env.eba-f8ueme2b.ap-south-1.elasticbeanstalk.com'
    }
);