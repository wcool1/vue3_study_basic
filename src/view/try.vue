<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Double Count: {{ doubleCount }}</p>
    <p>Username: {{ username || '未登录' }}</p>
    
    <button @click="increment">+1</button>
    <!-- 点击按钮触发login方法,传入参数admin到login action -->
    <button @click="login('admin')">Login</button>
    <!-- 添加重置按钮 -->
    <input 
      v-model="newUsername" 
      placeholder="输入新用户名"
    >
    <button @click="resetUsername">Reset User</button>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  setup() {
    const store = useStore()//获取store实例
    const newUsername = ref('') // 新增响应式变量存储输入值
    return {
      // 读取状态
      count: computed(() => store.state.Try.count),
      doubleCount: computed(() => store.getters.doubleCount),
      username: computed(() => store.state.Try.username),
      newUsername,//这其实是newUsername:newUsername的简写;代表将newUsername暴露给模板即将输入框的值暴重新赋值给newUsername（不能忽略）

      // 状态修改：mutations
      increment: () => store.commit('increment'),//提交一个名为increment的变化
      // 重置用户名
      resetUsername: () => {
        store.commit('setUsername', newUsername.value)//提交一个名为setUsername的变化
        newUsername.value = '' // 清空输入框
      },
      //action：异步操作
      login: (username) => store.dispatch('login', username),//分发一个名为login的action
     
    }
  }
}
</script>