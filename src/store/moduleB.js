// 为B页面提供数据的 模块B
const moduleB = {
  namespaced: true, // 启用命名空间
  state: {
    name: 'BBBB',
    gender: '女',
    age: 16
  },
  getters: {
    BgetGender (state) { // 这里的 `state` 对象是模块的局部状态
      return state.gender + ' Female'
    }
  },
  mutations: {
    Bincrement (state, payLoad) {
      state.age += payLoad.amount
    }
  },
  actions: {
    Bincrement ({ commit }, payLoad) {
      commit({
        type: 'Bincrement',
        amount: payLoad.amount
      })
    }
  }
}

export default moduleB
