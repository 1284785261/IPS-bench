<template>
  <div>
    <el-dialog :title="shownewManag.title" :visible.sync="shownewManag.show">
      <el-table :data="tableData" style="width: 100%;margin-bottom: 20px;" row-key="id" border default-expand-all>
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column prop="" label="优先级" width="180">
        </el-table-column>
        <el-table-column prop="name" label="运单状态" width="180">
        </el-table-column>
        <el-table-column prop="address" label="运单号">
        </el-table-column>
        <el-table-column prop="address" label="客户代码">
        </el-table-column>
        <el-table-column prop="address" label="件数">
        </el-table-column>
        <el-table-column prop="address" label="重量">
        </el-table-column>
        <el-table-column prop="address" label="销售产品">
        </el-table-column>
        <el-table-column prop="address" label="是否报关">
        </el-table-column>
      </el-table>
      <el-button @click="shownewManag.show = false" class="commit">重置</el-button>
      <el-button @click="shownewManag.show = false" class="commit">确定</el-button>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: ["shownewManag"],

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
/deep/ .el-dialog {
  .el-dialog__body {
    text-align: right;
  }
}
</style>
