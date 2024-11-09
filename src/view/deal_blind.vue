<template>
    <input v-model="username" />
    <button @click="handleClick">点击</button>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const username = ref('')
  const handleClick = () => {
    console.log(username.value)
  }
</script>
### `v-model` 的用途

`v-model` 是 Vue.js 中用于创建**双向数据绑定**的指令，主要用于表单输入元素与应用状态之间的同步。

### 主要功能

1. **双向绑定**：
   - 自动将用户输入的值同步到组件的状态（如 `data` 或 `ref`）。
   - 同时，当状态发生变化时，更新输入元素的显示值。

2. **简化代码**：
   - 替代手动编写 `:value` 和 `@input` 事件处理器，实现更简洁的双向绑定。

### 示例说明

```vue
<template>
  <input v-model="username" />
  <button @click="handleClick">点击</button>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')

const handleClick = () => {
  console.log(username.value) // 输出当前输入的用户名
}
</script>
```

### 解释

- **`v-model="username"`**：
  - 将输入框的值与 `username` 变量绑定。
  - 用户在输入框中输入内容时，`username` 会自动更新。
  - 如果在代码中修改 `username` 的值，输入框的显示内容也会相应更新。

### 常见用法

- **文本输入**：

  ```vue
  <input v-model="text" />
  ```

- **复选框**：

  ```vue
  <input type="checkbox" v-model="checked" />
  ```

- **选择框**：

  ```vue
  <select v-model="selected">
    <option value="A">A</option>
    <option value="B">B</option>
  </select>
  ```

### 总结

`v-model` 提供了一种简便的方式来处理表单输入与应用状态的同步，提升代码的可读性和维护性。