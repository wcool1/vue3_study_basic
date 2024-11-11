<template>
  <div>
    <p>counter1: {{ counter1 }}</p>
    <p>counter2: {{ counter2 }}</p>
    <p>Name: {{ obj.name }}</p>
    <p>Age: {{ obj.age }}</p>
    <p>Deep:{{ deep.info.contacts.phone }} </p>
    <!-- 添加按钮来修改变量的值 -->
    <button @click="incrementCounter1">Increment Counter1</button>
    <button @click="incrementCounter2">Increment Counter2</button>
    <button @click="changeName">Change Name</button>
    <button @click="increaseAge">Increase Age</button>
    <button @click="deep.info.contacts.phone = '654321'">Change Deep</button>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'

const counter1 = ref(32)
const counter2 = ref(4)

const obj = reactive({
  name: 'JJ',
  age: 19
})

// 定义修改 counter1 的函数
function incrementCounter1() {
  counter1.value++
}

// 定义修改 counter2 的函数
function incrementCounter2() {
  counter2.value++
}

// 定义修改 obj.name 的函数
function changeName() {
  obj.name = 'New Name'
}

// 定义修改 obj.age 的函数
function increaseAge() {
  obj.age++
}

// 监听多个变量
watch([counter1, counter2], () => {
  console.log('The new counter1 value is:', counter1.value)
  console.log('The new counter2 value is:', counter2.value)
})
//监听初始化值
watch(obj, (newValue, oldValue) => {
  if (oldValue) {
    console.log('The old obj value is:', oldValue)
  }
  console.log('The new obj value is:', newValue)
}, {
  immediate: true
})

// 监听 obj.age 属性
watch(() => obj.age, (newValue, oldValue) => {
  console.log('The old obj.age value is:', oldValue)
  console.log('The new obj.age value is:', newValue)
})

//deep: true 会深度监听对象，如果对象内的对象的属性发生变化，也会触发回调函数
const deep = reactive({
  name: 'JJ',
  age: 19,
  info: {
    address: 'Beijing',
    contacts: {
      phone: '123456',
      email: 'test@example.com'
    }
  }
})

// Vue3 的 reactive 会自动对对象进行深层代理（Proxy），所以：当直接修改 obj.info.contacts.phone 时，监听器都会触发
watch(deep, () => {
  console.log('obj changed')
})

//deep: true 主要用于以下场景：
// 当你使用 reactive 对象作为 watch 的源，且需要在对象被整个替换时触发监听
// 当监听的是一个返回非响应式对象的 getter 函数时

// 如果是这种情况，则需要 deep: true：当改变的是 deep.info时，returnNonReactiveObj会被整个替换
const returnNonReactiveObj = () => ({
  info: deep.info
})
watch(returnNonReactiveObj, (newValue, oldValue) => {
  console.log('non-reactive obj changed:', newValue)
}, { deep: true })

</script>
