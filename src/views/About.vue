<template>
  <Row type="flex" justify="center">
    <Col span="12">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <about-box></about-box>
    </Col>
  </Row>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
#nav {
  padding: 40px;
  text-align: center;
  font-size: 14px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
