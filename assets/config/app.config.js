const configs = Object.freeze({
    base_url: process.env.BASE_URL,
    // api_url: process.env.VUE_APP_API_URL + process.env.VUE_APP_API_VERSION,
    api_url: process.env.VUE_APP_API_URL,
    end_point: {
        users: 'users',
        todos: 'todos'
    }

});

export default configs;
