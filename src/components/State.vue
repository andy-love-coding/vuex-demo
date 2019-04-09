<template>
  <div>
    <p>State 页面</p>
    <!-- 使用 vuex 仓库(store) 中的数据 -->
    <!-- 使用方法一：直接使用，但是不太方便，书写太长了 -->
    {{ $store.state.msg }}

    <!-- 使用方法二：封装到方法中 -->
    {{ getMsg() }}

    <!-- 使用方式三：将内容封装到计算属性中 -->
    <!-- {{ ComuptedMsg }} -->

    <!-- 使用方法四：使用【辅助函数】mapState 来操作 (数组映射 独占)。  -->
    <!-- 缺点：容易与本页面 data 中的数据命名冲突；独占了当前组件的计算属性 computed -->
    <!-- {{ msg }} -->

    <!-- 使用方法五：使用【辅助函数】mapState 来操作 (对象映射 独占) -->
    <!-- 缺点：独占了当前组件的计算属性 computed -->
    <!-- {{ msgAlias }} -->

    <!-- 使用方法六：使用【辅助函数】mapState来操作 (对象映射 非独占)。【推荐这种使用方法】-->
    {{ msgAlias }}
    {{ reverseMsg }}
  </div>
</template>

<script>
// 导入辅助函数
import { mapState } from 'vuex'

export default {
  data () {
    return {
      msg: 'localMsg' // data 中的 msg 会优先于数组映射的 msg
    }
  },
  methods: {
    // 方法二
    getMsg () {
      return this.$store.state.msg // {{ getMsg() }} 输出：storeMsg
    }
  },
  // computed: {
  //   // 方法三
  //   ComuptedMsg () {
  //     return this.$store.state.msg // {{ ComuptedMsg }} 输出：storeMsg
  //   }
  // }
  // computed: mapState([
  //   // 方法四：映射 this.msg 为 store.state.msg。mapState 独占了 computed
  //   'msg' // {{ msg }} 输出：storeMsg
  // ])
  // computed: mapState({
  //   // 方法五：mapState 独占了 computed
  //   msgAlias: 'msg' // {{ msgAlias }} 输出：storeMsg
  // })
  computed: {
    // 方法六：mapState 没有独占 computed，还可以在 computed 中造新的计算属性
    reverseMsg () {
      return this.msg.split('').reverse().join('') // {{ reverseMsg }} 输出：gsMlacol
    },
    ...mapState({
      msgAlias: 'msg' // {{ msgAlias }} 输出：storeMsg
    })
  }
}
</script>

<style>

</style>
