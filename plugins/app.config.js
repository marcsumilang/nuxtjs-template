export default ({ app }, inject) => {
    // Inject $hello(msg) in Vue, context and store.

    const config = Object.freeze({
        base_url: process.env.BASE_URL,
        api_url: process.env.VUE_APP_API_URL,
        end_point: {
            todos: 'todos',
            users: 'users'
        }
    });
    
    inject('configs', config)
  
}

// export default config;