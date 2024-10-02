import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default {
  createPost(post) {
    console.log('POST:', post)
    const postToCreate = apiClient.post('/post/create', post)
    console.log('POST TO CREATE:', postToCreate)

    return postToCreate
  }
}
