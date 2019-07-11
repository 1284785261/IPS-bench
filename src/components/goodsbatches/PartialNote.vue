<template>
  <div>
    <el-dialog title="分批备注" :visible.sync="showSet" width="30%">
      <span>备注:</span>
      <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="textarea">
      </el-input>
      <div slot="footer" class="dialog-footer">
        <el-button @click="showSet = false">重置</el-button>
        <el-button type="primary" @click="showSet = false">提交</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: ["showSet"],

  data() {
    return {
      //   dialogFormVisible: true,
      form: {
        name: ""
      },
      textarea: "",
      formLabelWidth: "120px"
    };
  }
};
</script>
<style lang="less" scoped>
.el-dialog {
  .el-dialog__body {
    text-align: left;
    span {
      text-align: left;
      display: block;
      line-height: 30px;
    }
  }
}
</style>
