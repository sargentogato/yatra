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

<script>
import api from '@/services/api'

export default {
  data() {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    async submitPost() {
      try {
        const post = {
          title: this.title,
          content: this.content
        }
        const response = await api.createPost(post)
        console.log('info:', post)
        console.log('Respuesta del servidor:', response.data)
        alert('Post created successfully')
        this.title = ''
        this.content = ''
      } catch (error) {
        console.error('Error:', error)
        alert('Error creating post: ' + (error.response?.data?.message || error.message))
      }
    }
  }
}
</script>
