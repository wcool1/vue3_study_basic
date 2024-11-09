import Try from '../view/try.vue';
import C_p from '../view/child_parent/ParentComponent.vue';
import ParentComponent from '../view/parent_child/ParentComponent.vue';
import Live from '../view/live.vue';
import Found from '../view/found.vue';
import if_for from '../view/if_for.vue';
import DealBlind from '../view/deal_blind.vue'; // 根据实际路径修改

const routes = [
  {
    path: '/try',
    name: 'Try',
    component: Try
  },
  {
    path:'/p_c',
    name:"p_c",
    component:ParentComponent

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