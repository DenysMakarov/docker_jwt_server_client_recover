import axios from 'axios'

export const APP_URL = 'http://localhost:5500'

const $host = axios.create({
    baseUrl: APP_URL
})

const $authHost = axios.create({
    baseUrl: APP_URL
})

const authInterceptor = config => {
    config.header.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}