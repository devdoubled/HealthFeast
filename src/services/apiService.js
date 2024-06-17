// services/apiService.js

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const apiClient = axios.create({
    baseURL: "https://khang.systems/api",
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor
apiClient.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('userToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add a response interceptor
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        // Handle response errors
        return Promise.reject(error);
    }
);

export default apiClient;
