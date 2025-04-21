<template>
  <div class="son-container">
    <h4>儿子组件</h4>
    <div class="message-panel">
      <h5>从祖先组件注入的数据:</h5>
      <div class="data-item">
        <span class="label">爷爷的消息:</span>
        <span class="value">{{ message }}</span>
      </div>
      <div class="data-item">
        <span class="label">爷爷的金额:</span>
        <span class="value">{{ money }}</span>
        <button @click="addMoney">增加</button>
      </div>
      <div class="data-item">
        <span class="label">父亲的消息:</span>
        <span class="value">{{ fatherMessage }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

// 注入爷爷和父亲组件提供的所有数据
const message = inject('message')
const money = inject('money')
const addMoney = inject('addMoney')
const fatherMessage = inject('fatherMessage')
</script>

<style scoped>
.son-container {
  border: 3px solid #42A5F5;
  padding: 15px;
  margin: 15px;
  border-radius: 8px;
}

.message-panel {
  background-color: #E3F2FD;
  padding: 12px;
  border-radius: 6px;
}

h5 {
  margin-top: 0;
  color: #1565C0;
}

.data-item {
  margin: 10px 0;
  display: flex;
  align-items: center;
}

.label {
  font-weight: bold;
  margin-right: 8px;
  min-width: 100px;
}

.value {
  color: #0D47A1;
}

button {
  background-color: #42A5F5;
  color: white;
  border: none;
  padding: 4px 10px;
  border-radius: 4px;
  margin-left: 10px;
  cursor: pointer;
}

button:hover {
  background-color: #1E88E5;
}
</style>
