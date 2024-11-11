<template>
  <input v-model="username" />
  <button @click="handleClick">点击</button>
</template>

<script setup>
  import { ref } from 'vue'

  const username = ref('')
  const handleClick = () => {
    console.log(username.value)
  }
</script>
