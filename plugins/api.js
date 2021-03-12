export default function ({ $axios, $configs }, inject) {
    // Create a custom axios instance

    const api = $axios.create({
        timeout: 30000,
        headers: {
            'Content-Type': 'application/json',
        }
    })
  
    // Set baseURL to something different
    api.setBaseURL($configs.api_url)
    // Inject to context as $api
    inject('api', api)
}