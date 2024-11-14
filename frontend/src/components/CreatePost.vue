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

<script setup lang="ts">
import api from '@/services/api.js'
import axios from 'axios'

import { ref } from 'vue'

const title = ref<string>('')
const content = ref<string>('')

interface Post {
  title:string,
  content:string,
}

const submitPost = async ():Promise<void> => {
  try {
    const post:Post = {
      title: title.value,
      content: content.value
    }
    const response = await api.createPost(post)
    console.log('Respuesta del servidor:', response.data.message, response.data.id)
    
    if(response.data.id) {
      alert(response.data.message)
    }else {
      alert(response.data)
    }
    
    title.value = ''
    content.value = ''
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error)
      alert(error.response?.data?.message || error.message )
    } else if (error instanceof Error) {
      console.error('Error:', error)
    } else {
      console.error('Unknow error', error)
      alert('Ha ocurrido un error, el post no ha sido creado')
    }
  }
}
</script>
