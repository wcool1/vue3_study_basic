<template>
  <div>
    <ChildComponent 
      @message-event="handleMessage"
      @data-updated="handleData"
      @user-action="handleUserAction"
    />
    <div>收到的消息: {{ message }}</div>
    <div>更新的数据: {{ updateInfo }}</div>
    <div>用户操作: {{ userActionInfo }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ChildComponent from './ChildComponent.vue'

const message = ref('')
const updateInfo = ref({})
const userActionInfo = ref({})

function handleMessage(msg) {
  message.value = msg
  console.log('收到消息:', msg)
}

function handleData(data) {
  updateInfo.value = data
  console.log('数据更新:', data)
}

function handleUserAction(action) {
  userActionInfo.value = action
  console.log('用户操作:', action)
}
</script>