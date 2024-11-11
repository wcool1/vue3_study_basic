<!-- ChildComponent.vue -->
<template>
  <p>{{ message }}</p>
</template>

<!-- 选项式API
  <script >
  
  export default {
    props: ['message']
  };
  </script> -->

<!-- 组合式API -->
<script setup>
// 使用 defineProps 声明 props
const props = defineProps({
  message: {
    type: String,
    required: true
  }
});
</script>