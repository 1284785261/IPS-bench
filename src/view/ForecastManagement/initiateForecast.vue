
<template>
  <div class="bg">
    <menuBox></menuBox>
    <div class="box-content">
      <menuHeader></menuHeader>
      <div class="table-box">
        <table-Header></table-Header>
        <div class="operation-box">
          <div class="button-left">
            <el-button round size="medium">日志</el-button>
          </div>
          <div class="button-right">
            <el-button round icon="el-icon-bottom" size="medium">下载发票</el-button>
            <!-- <el-button type="primary">导出资料</el-button> -->
          </div>
        </div>
        <table-Body></table-Body>
        <div class="statistical">
          <span class="number"><i></i>总件数：42件 </span>
          <span> </span>
          <span class="weight"><i></i> 总重量：42KG</span>
        </div>
        <div class="page-box">
          <div>
            <el-button type="primary">筛选列</el-button>
          </div>
          <div class="block">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import menuHeader from "@/components/menuHeader";
import menuBox from "@/components/menuBox";
import tableHeader from "@/components/tabaeHead";
import tableBody from "@/components/tableBody";
// import
export default {
  name: "customerForecast",
  components: {
    menuHeader,
    menuBox,
    tableHeader,
    tableBody
  },
  data() {
    return {
      input1: "",
      currentPage4: 4
    };
  },
  mounted() {},
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>
<style lang="less" scoped>
.operation-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .button-left,
  .button-right {
    margin: 20px;

    .el-button--medium {
      color: #053e94;
      border: 1px solid #053e94;
      border-radius: 50px;
    }
  }
}
.page-box {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    margin: 0 50px;
  }
}
</style>
