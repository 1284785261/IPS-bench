<template>
  <div>
    <el-dialog :visible.sync="showSucc.show" :show-close="false" width="30%">
      <i class="el-icon-circle-check"></i>
      <p>{{showSucc.title}}</p>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: ["showSucc"]
};
</script>
<style lang="less" scoped>
.el-dialog {
  .el-dialog__body {
    .el-icon-circle-check {
      font-size: 100px;
      color: #07b90e;
    }
    p {
      margin-top: 50px;
      font-size: 14px;
    }
  }
}
</style>
