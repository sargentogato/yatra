import axios, { type AxiosInstance, type AxiosResponse } from 'axios'

/* Instancia de axios que da acceso a todos los métodos de Axios */
const apiClient:AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

/* Esto también está en CreatPost component */
interface Post {
  title:string,
  content:string,
}

export default {
  async createPost(post:Post):Promise<AxiosResponse> {
    /* 
      Llamando al método post de Axios, utilizando la instancia 
      que creamos arriba
    */
    const postToCreate = await apiClient.post('/posts', post)
    
    return postToCreate
  }
}
