import Try from '../view/try.vue';
import C_p from '../view/child_parent/ParentComponent.vue';
import p_c from '../view/parent_child/ParentComponent2.vue';
import Live from '../view/live.vue';
import Found from '../view/found.vue';
import if_for from '../view/if_for.vue';
import DealBlind from '../view/deal_blind.vue'; // 根据实际路径修改
import watch from '../view/watch.vue'
import inject_provide from '../view/inject_provide/grandpa.vue'
const routes = [
  {
    path: '/try',
    name: 'Try',
    component: Try
  },
  {
    path:'/p_c',
    name:"p_c",
    component:p_c

  },
  {
    path:'/c_p',
    name:"c_p",
    component: C_p
  },
  {
    path: '/live',
    name: 'Live',
    component: Live
  },
  {
    path:'/found',
    name: 'found',
    component:Found
  },
  {
    path:"/if_for",
    name:"if_for",
    component:if_for
  },
  {
    path: '/deal_blind',
    name: 'DealBlind',
    component: DealBlind
  },
  {
    path:'/watch',
    name:'watch',
    component:watch
  },
  {
    path:'/inject_provide',
    name:'inject_provide',
    component:inject_provide
  }
 

];
//导入方法，创造router实例
import {createRouter, createWebHashHistory} from 'vue-router'
//创造router实例
const router = createRouter({
  //路由模式
  history: createWebHashHistory(),
  //路由数据
  routes,
})
//导出router实例
export default router