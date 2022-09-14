import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance =  axios.create({
    baseURL: 'https://base.loca.lt',
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2MzFjN2RlM2JlODFiMWQ1OWQ3NmJjMzgiLCJpYXQiOjE2NjI5ODM4NTd9.rbr-35tJUxw5hI4qZ13cy_okLvFfAvcei0mURrTsmnA",
        "Content-Type": "application/json"


    }
});

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if (token){
            // config.headers.Authorization = `Bearer ${token}`;
            console.log(config.headers);

        }

        return config;
    },
    (err) => {console.log(err)}
);

export default instance;