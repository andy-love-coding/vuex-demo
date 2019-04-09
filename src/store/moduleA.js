// 为A页面提供数据的 模块A
const moduleA = {
  namespaced: true, // 启用命名空间
  state: {
    name: 'AAAA',
    gender: '男',
    age: 18
  },
  getters: {
    AgetGender (state) { // 这里的 `state` 对象是模块的局部状态
      return state.gender + ' Male'
    }
  },
  mutations: {
    Aincrement (state, payLoad) {
      state.age += payLoad.amount
    }
  },
  actions: {
    Aincrement ({ commit }, payLoad) {
      commit({
        type: 'Aincrement',
        amount: payLoad.amount
      })
    }
  }
}

export default moduleA
