<template>
  <ChildComponent @message-event="handleMessageEvent" />
  <p>{{ messageFromChild }}</p>
</template>
<!-- 选项式 -->
<!-- <script>
import ChildComponent from './ChildComponent.vue'
export default {
  components: {
    ChildComponent//注册组件
  },
  data() {
    return {
      messageFromChild: ''
    };
  },
  methods: {
    handleMessageEvent(message) {
      this.messageFromChild = message;
    }
  }
};

</script> -->
<!-- 组合式 -->
<script setup>

import { ref } from 'vue';

import ChildComponent from './ChildComponent.vue'
// 必须遵循js的规范，任何变量使用前必须申明
let messageFromChild = ref('');

const handleMessageEvent = (message) => {
  messageFromChild.value = message;
};
</script>