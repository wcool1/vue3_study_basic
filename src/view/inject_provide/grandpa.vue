<template>
  <div class="grandpa-container">
    <h2>爷爷组件</h2>
    <div class="controls">
      <p>当前消息: {{ message }}</p>
      <input v-model="message" placeholder="修改消息"/>
      <p>当前金额: {{ money }}</p>
      <button @click="addMoney">增加钱 (+100)</button>
    </div>
    <father />
  </div>
</template>

<script setup>
import { ref, provide } from 'vue'
import father from './father.vue'

// 创建要提供的数据
const message = ref('来自爷爷的问候')
const money = ref(1000)

// 创建修改数据的方法
const addMoney = () => {
  money.value += 100
}

// 提供数据给后代组件
provide('message', message)  // 直接提供响应式数据
provide('money', money)
provide('addMoney', addMoney)  // 提供方法
</script>

<style scoped>
.grandpa-container {
  border: 3px solid #8A2BE2;
  padding: 20px;
  margin: 20px;
  border-radius: 8px;
}

.controls {
  margin: 15px 0;
}

input {
  padding: 8px;
  margin: 8px 0;
}

button {
  background-color: #8A2BE2;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #7B1FA2;
}
</style>
