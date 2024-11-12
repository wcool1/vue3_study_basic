const state = {
  // 初始化状态
  count: 0,
  username: ''
}

const mutations = {
  // 修改状态的方法
  increment(state) {
    state.count++
  },
  setUsername(state, username) {
    state.username = username
  }
}

const actions = {
  // 异步操作
  async login({ commit }, username) {
    // 模拟API调用
    await new Promise(resolve => setTimeout(resolve, 1000))
    commit('setUsername', username) // 最终通过 commit 提交 mutation 修改状态
  }
}

const getters = {
  // 计算属性
  doubleCount(state) {
    return state.count * 2
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}