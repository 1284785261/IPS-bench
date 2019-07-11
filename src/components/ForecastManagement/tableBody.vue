<template>
  <div>
    <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column label="预报状态" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="下单时间" width="120">
      </el-table-column>
      <el-table-column prop="name" label="预报订单号" width="120">
      </el-table-column>
      <el-table-column prop="name" label="运输方式" width="120">
      </el-table-column>
      <el-table-column prop="name" label="物流公司/单号" width="120">
      </el-table-column>
      <el-table-column prop="name" label="件数" width="120">
      </el-table-column>
      <el-table-column prop="name" label="重量(KG)" width="120">
      </el-table-column>
      <el-table-column prop="name" label="销售产品" width="120">
      </el-table-column>
      <el-table-column prop="name" label="目的国家" width="120">
      </el-table-column>
      <el-table-column prop="name" label="报关" width="120">
      </el-table-column>
      <el-table-column prop="name" label="客户编码" width="120">
      </el-table-column>
      <el-table-column prop="address" label="业务员" show-overflow-tooltip>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      multipleSelection: []
    };
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
};
</script>
<style lang="less" scoped>
</style>
