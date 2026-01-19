import axios from "axios";

export const api = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
    headers:{
        "Content-Type":"application/json"
    }       
})

export const creatPost = (data) => {
    return api.post('/posts',data)
}