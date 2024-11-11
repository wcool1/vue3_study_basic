<template>
  <div>
    <button @click="sendMessage">发送消息</button>
    <button @click="updateData">更新数据</button>
    <button @click="userAction">用户操作</button>
  </div>
</template>

<script setup>
const emit = defineEmits(['message-event', 'data-updated', 'user-action'])//是自定义事件名（能体现意义最好）被父组件监听

function sendMessage() {
  emit('message-event', '这是来自子组件的消息')
}

function updateData() {
  emit('data-updated', {
    id: 1,
    timestamp: new Date().toISOString(),
    data: '更新的数据'
  })
}

function userAction() {
  emit('user-action', {
    type: 'click',
    component: 'ChildComponent'
  })
}
</script>