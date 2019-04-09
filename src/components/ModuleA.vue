<template>
  <div>
    <p>A 页面</p>
    <p>
      A模块数据：{{ name}} -- {{ gender }} -- {{ age }} -- {{ AgetGender }}
    </p>
    <p>
      全局数据：{{ count }}
    </p>
    <button @click="add">操作A模块 点我A加4岁</button>
    <button @click="addGolbal">操作全局 加1</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    // 映射局部模块A
    ...mapState('a', { // 加命名空间
      name: 'name',
      gender: 'gender',
      age: 'age'
    }),
    ...mapGetters('a', { // 加命名空间
      AgetGender: 'AgetGender'
    }),
    // 映射全局数据
    ...mapState({
      count: 'count'
    })
  },
  methods: {
    // 映射局部模块A中的 actions
    ...mapActions('a', { // 加命名空间
      Aincrement: 'Aincrement'
    }),
    add () {
      this.Aincrement({
        amount: 4
      })
    },
    // 映射全局 actions
    ...mapActions({
      incrementAsync: 'incrementAsync'
    }),
    addGolbal () {
      this.incrementAsync({
        amount: 1
      })
    }
  }
}
</script>

<style>

</style>
