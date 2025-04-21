<template>
  <div class="father-container">
    <h3>父亲组件</h3>
    <div class="message-box">
      <p>从爷爷获取的消息: {{ message }}</p>
      <p>从爷爷获取的金额: {{ money }}</p>
      <button @click="addMoney">调用爷爷的方法增加钱</button>
    </div>
    <div class="controls">
      <p>父亲的消息: {{ fatherMessage }}</p>
      <input v-model="fatherMessage" placeholder="修改父亲消息"/>
    </div>
    <son />
  </div>
</template>

<script setup>
import { ref, inject, provide } from 'vue'
import son from './son.vue'

// 注入爷爷组件提供的数据和方法
const message = inject('message')
const money = inject('money')
const addMoney = inject('addMoney')

// 创建父亲组件自己的数据
const fatherMessage = ref('来自父亲的消息')

// 提供给子组件
provide('fatherMessage', fatherMessage)
</script>

<style scoped>
.father-container {
  border: 3px solid #FF7043;
  padding: 15px;
  margin: 15px;
  border-radius: 8px;
}

.message-box {
  background-color: #FFF3E0;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 15px;
}

.controls {
  margin: 15px 0;
}

input {
  padding: 8px;
  margin: 8px 0;
}

button {
  background-color: #FF7043;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #E64A19;
}
</style>
