 <!-- ParentComponent.vue -->
<template>
  <ChildComponent2 :message="parentMessage" />
</template>
<!-- 选项式API -->
<!-- <script>
import ChildComponent from './ChildComponent.vue';
export default {
  data() {
    return {
      parentMessage: 'Hello from parent'
    };
  },
  components: { ChildComponent }
  /*
      组件注册目的：

      告诉 Vue 这个父组件要使用 ChildComponent 子组件
      建立组件间的关联关系
      为什么必要：

      Vue 规定必须先注册组件才能在模板中使用
      如果不注册就直接在模板中使用 <ChildComponent>，Vue 会报错

  */
};
</script> -->
<!-- 组合式API -->

<script setup>
const parentMessage = 'Hello  from parent';
</script>

