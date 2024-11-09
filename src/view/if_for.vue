<template>
    <!-- 条件渲染 -->
    <div v-if="show">show为真显示内容</div>
    <div v-else>show为假:其他内容</div>

    <!-- 列表渲染 -->
    <ul>
        <li v-for="item in list" :key="item.id">
            {{ item.name }}
        </li>
    </ul>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(false)
const list = ref([
    { id: 1, name: '项目1' },
    { id: 2, name: '项目2' }
])
</script>