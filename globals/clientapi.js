import axios from 'axios'
import config from '../config/app.config';

const client = axios.create({
    baseURL: config.api_url,
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
    },
});


window.isLogin = () => {
    if (document.cookie.indexOf("auth") >= 0) {
        return true;
    }
    return false;
};


//response interceptors
client.interceptors.response.use((response) => {

    // let auth = localStorage.getItem('auth');
    // if (auth) {
    //     response.headers['Authorization'] = "Bearer " + auth_token
    // }
    // var response = response.data.data;


    return response.data;

}, (error) => {

    return error.response.data;
    // return console.log(error.response);
    // if unauthenticated request, redirect to login
    // if (window.location.pathname == '/login') {
    //     return Promise.reject(error.response.data);
    // } else if (error.response.status === 401) {
    //     localStorage.removeItem('token');
    //     location.href = '/login';
    // } else {
    //
    //     return error.response.data;
    // }
});


export default {
    client
}
