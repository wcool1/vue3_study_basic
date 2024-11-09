<script setup>
// 组合式API基础语法
import { ref, reactive } from 'vue'

// 方式1：使用 ref() 定义基础类型
const count = ref(0)
const message = ref('Hello')

// 方式2：使用 reactive() 定义对象类型
const state = reactive({
count: 0,
message: 'Hello'
})

// 使用时：
// ref 需要 .value (在模板中例外)
// console.log(count)
console.log(message.value)

// reactive 直接使用
console.log(state.count)
console.log(state.message)
</script>

<template>
<!-- 在模板中使用 ref 不需要 .value -->
<div>{{ count }}</div>
<div>{{ message }}</div>

<!-- reactive 对象的使用 -->
<div>{{ state.count }}</div>
<div>{{ state.message }}</div>
</template>
