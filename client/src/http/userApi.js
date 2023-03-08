import {$host} from "./index";
import jwt_decode from "jwt-decode";


export const registration = async (email, pass) => {
    const {data} = await $host.post('api/auth/registration', {email, pass, role: 'ADMIN'})
    return jwt_decode(data.token);
}

export const login = async (email, pass) => {
    const {data} = await $host.post('api/auth/registration', {email, pass})
    return jwt_decode(data.token);
}

export const check = async (email, pass) => {
    const {data} = await $host.post('api/auth/registration', {email, pass, role: 'ADMIN'})
    return jwt_decode(data.token);
}