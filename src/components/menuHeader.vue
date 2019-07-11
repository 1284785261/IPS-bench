<template>
  <div class="bg-box">
    <div class="header-box">
      <div class="buttons">
        <!-- <el-button type="primary" circle>日历</el-button>
        <el-button type="primary" circle>消息</el-button>
        <el-button type="primary" circle>用户</el-button>
        <el-button type="primary" circle>推出</el-button> -->
        <i class="el-icon-date"></i>
        <i class="el-icon-message-solid"></i>
        <!-- <el-avatar icon="el-icon-user-solid"></el-avatar> -->
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        <span class="account">a1284785261</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.bg-box {
  background: #fff;
  width: 100%;
  height: 80px;
  .header-box {
    text-align: right;
    height: 80px;
    .buttons {
      height: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-right: 50px;
      .el-icon-date {
        font-size: 24px;
        margin: 0 10px;
      }
      .el-icon-message-solid {
        font-size: 24px;
        margin: 0 10px;
      }
      .el-avatar {
        width: 42px;
        height: 42px;
        margin-left: 20px;
        border: 1px solid #ccc;
      }
      .account {
        margin-left: 10px;
      }
    }
  }
}
</style>
