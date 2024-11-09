<template>
  <div>{{ count }}</div>
  <button @click="onClick">
    增加 1
  </button>
</template>

<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';

const count = ref(1);

const onClick = () => {
  count.value += 1;
};


onBeforeMount(() => {
  alert("组件渲染之前调用的时beforeMount函数");
});

onMounted(() => {
  alert("组件渲染完成调用的时mounted函数");
});

onBeforeUpdate(() => {
  alert("组件更新之前调用的时beforeUpdate函数");
});

onUpdated(() => {
  alert("组件更新之后调用的时updated函数");
});

onBeforeUnmount(() => {
  alert("组件卸载之前调用的时beforeUnmount函数");
});

onUnmounted(() => {
  alert("组件卸载之后调用的时unmounted函数");
});
</script>
