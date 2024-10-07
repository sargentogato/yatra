import axios from 'axios'

/* Instancia de axios que da acceso a todos los métodos de Axios */
const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default {
  createPost(post) {
    /* 
      Llamando al método post de Axios, utilizando la instancia que creamos 
      arriba
    */
    const postToCreate = apiClient.post('/posts/create', post)
    console.log('POST TO CREATE:', postToCreate)

    return postToCreate
  }
}
