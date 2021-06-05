import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';

const api = Axios.create({
    baseURL: 'http://overflix.cwg.services/api'
});

api.interceptors.request.use(async (config) => {

    const jwt = await AsyncStorage.getItem("jwt");
    if (jwt) 
        config.headers.Authorization = `Bearer ${jwt}`;
    return config;
})

export default api;

