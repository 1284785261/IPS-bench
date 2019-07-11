<template>
  <div>
    <el-dialog title="分批计划" :visible.sync="showSet" width="40%">
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <el-button @click="showSet = false">搜索</el-button>
      <el-table :data="tableData" style="width: 100%;margin-bottom: 20px;" row-key="id" border default-expand-all>
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column prop="" label="任务单" width="180">
        </el-table-column>
        <el-table-column prop="name" label="件数" width="180">
        </el-table-column>
        <el-table-column prop="address" label="重量(KG)">
        </el-table-column>
      </el-table>
      <el-button @click="showSet = false" class="commit">提交</el-button>
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
/deep/ .el-dialog {
  .el-dialog__body {
    text-align: right;
    .el-input {
      width: 80%;
      margin-right: 30px;
      margin-bottom: 30px;
    }
    .commit {
    }
  }
}
</style>
