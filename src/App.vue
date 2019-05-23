<template>
  <div id="app" v-cloak>
    <router-view />
    <!-- 返回顶部 -->
    <BackTop></BackTop>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  mounted () {
    this.judge()
    window.addEventListener('resize', this.judge)
  },
  methods: {
    ...mapActions([
      'judge'
    ])
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  font-size: 0;
  line-height: 1.5;
}
[v-cloak] {
  display: none;
}
</style>
