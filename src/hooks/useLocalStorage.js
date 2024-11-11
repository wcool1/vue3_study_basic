import { ref, watch } from 'vue';

export default function useLocalStorage(key, initialValue) {
    const data = ref(initialValue);

    if (localStorage.getItem(key)) {
        data.value = JSON.parse(localStorage.getItem(key));
    } else {
        localStorage.setItem(key, JSON.stringify(initialValue));
    }

    watch(data, (newValue) => {
        localStorage.setItem(key, JSON.stringify(newValue));
    });

    return { data };
}
/*
这个 

useLocalStorage

 钩子函数是一个自定义的组合式函数(Composable)，用于在 Vue 3 中方便地管理本地存储(localStorage)数据。它的主要功能包括：

1. **数据持久化存储**:
```javascript
if (localStorage.getItem(key)) {
    data.value = JSON.parse(localStorage.getItem(key));
} else {
    localStorage.setItem(key, JSON.stringify(initialValue));
}
```
- 当首次使用时，如果 localStorage 中不存在数据，则存入初始值
- 如果已存在数据，则读取已保存的数据

2. **响应式数据管理**:
```javascript
const data = ref(initialValue);
```
- 使用 

ref

 创建响应式数据，可以在组件中实时反映数据变化

3. **自动同步到 localStorage**:
```javascript
watch(data, (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
});
```
- 通过 

watch

 监听数据变化
- 当数据发生变化时，自动更新到 localStorage 中

使用示例(在src/view/try.vue中):
```javascript
const { data } = useLocalStorage('myData', { name: 'default' });
```

这样就创建了一个在组件和 localStorage 之间自动同步的响应式数据。
*/