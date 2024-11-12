// store/index.js
import { createStore } from 'vuex';

import Try from "./try.js"
// 创建一个新的 store 实例
export default createStore({
  modules:{
    Try
  }

})