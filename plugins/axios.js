export default ({ app, $axios, redirect}) => {
    // Request Interceptors
    $axios.onRequest((response) => {
        console.log('Response Interceptors');
    });

    // Error Interceptors
    $axios.onError((error) => {
        if (error.response.status === 404) {
          redirect('/error/')
        }
    });
}