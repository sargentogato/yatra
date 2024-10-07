<template>
  <div>
    <h2>Create Post</h2>
    <form @submit.prevent="submitPost">
      <div>
        <label for="title">Title:</label>
        <input v-model="title" id="title" type="text" required />
      </div>
      <div>
        <label for="content">Content:</label>
        <textarea v-model="content" id="content" required></textarea>
      </div>
      <button type="submit">Create</button>
    </form>
  </div>
</template>

<script setup>
import api from '@/services/api.js'
import axios from 'axios'

import { ref } from 'vue'

const title = ref('')
const content = ref('')


const submitPost = async () => {
  try {
    const post = {
      title: title.value,
      content: content.value
    }
    const response = await api.createPost(post)
    console.log('Respuesta del servidor:', response.data.message)
    
    if(response.data.message) {
      alert(response.data.message)
    }
    
    title.value = ''
    content.value = ''
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error)
      alert('Error creating post: ' + (error.response?.data?.message || error.message))
    } else if (error instanceof Error) {
      console.error('Error:', error)
    } else {
      console.error('Unknow error', error)
      alert('Ha ocurrido un error, el post no ha sido creado')
    }
  }
}
</script>
