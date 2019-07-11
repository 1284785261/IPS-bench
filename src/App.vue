<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>

<style lang="less">
@import "./main.less";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #e9e7e7;
  height: 100%;
  .bg {
    height: 100%;
    overflow: hidden;
    .box-content {
      height: 100%;
      margin-left: 200px;
    }
  }
}
</style>
