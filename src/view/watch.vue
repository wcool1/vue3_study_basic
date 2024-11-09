<script setup>
import { ref, reactive, watch } from 'vue'

const counter1 = ref(0)
const counter2 = ref(0)
// 监听多个
watch([counter1, counter2], (newValue, oldValue) => {
  console.log('The new counter1 value is: ' + counter1.value)
  console.log('The new counter2 value is: ' + counter2.value)
})

const obj = reactive({
  name: 'JJ',
  age: 18
})
// 深度监听对象
watch(obj, (newValue, oldValue) => {
  console.log('The new obj value is: ' + obj.value)
}, {
   deep: true,
   immediate: true
})
// watch监听单个属性
watch(() => obj.name, (newValue, oldValue) => {
  console.log('The new obj value is: ' + obj.value)
}, {
   deep: true,
   immediate: true
})

</script>