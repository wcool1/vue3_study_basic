<template>
  <button @click="sendMessage">Send Message</button>
</template>

<!-- <script>
选项式
export default {
  methods: {
    sendMessage() {
      this.$emit('message-event', 'Hello from child');
    }
  }
};
</script> -->

<!-- 组合式 -->
<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['message-event']);

const sendMessage = () => {
  emit('message-event', 'Hello from child');
};
</script>