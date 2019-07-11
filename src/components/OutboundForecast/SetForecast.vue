<template>
  <div>
    <el-dialog title="设置出库单" :visible.sync="showSet">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="showSet = false">重置</el-button>
        <el-button type="primary" @click="showSet = false">生成出库单</el-button>
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
      formLabelWidth: "120px"
    };
  }
};
</script>
<style lang="less" scoped>
.el-dialog {
  .el-dialog__body {
    .el-form {
      text-align: left;
      .el-form-item {
        width: 45%;
        display: inline-block;
      }
    }
  }
}
</style>
