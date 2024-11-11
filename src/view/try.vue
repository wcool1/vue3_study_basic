<template>
    <div>{{ count }}</div>
    <button @click="onClick">
        增加 1
    </button>
  <div>
    <span>{{ value }}</span>
    <br>
    <span>{{ reversedValue }}</span>
  </div>
</template>

<script setup>
const value = ref('this is a value')

// 注意这里
const reversedValue = computed(() => {
  // 使用 ref 需要 .value
  return value.value
    .split('').reverse().join('');
})

let count = ref(0)
const onClick = () => {
    count.value++
}
import useLocalStorage from '../hooks/useLocalStorage';

const { data } = useLocalStorage('myData', { name: 'default' });
//输出localStorage的值

</script>