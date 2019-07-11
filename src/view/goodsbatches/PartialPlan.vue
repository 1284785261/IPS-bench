
<template>
  <div class="bg">
    <menuBox></menuBox>
    <div class="box-content">
      <menuHeader></menuHeader>
      <div class="table-box">
        <table-Header></table-Header>
        <div class="operation-box">
          <div class="button-left">
            <el-button type="primary">日志</el-button>
            <el-button type="primary" @click="showPlan">分批计划</el-button>
          </div>
          <div class="button-right">
          </div>
        </div>
        <table-Body></table-Body>
        <div class="page-box">
          <div>
            <span>总件数：42件 </span>
            <span> </span>
            <span> 总重量：42KG</span>
          </div>
          <div class="block">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
    <Partial-Plan :showSet="showPlans"></Partial-Plan>
  </div>
</template>
<script>
import menuHeader from "@/components/menuHeader";
import menuBox from "@/components/menuBox";
import tableHeader from "@/components/tabaeHead";
import tableBody from "@/components/goodsbatches/goodsBatches";
import PartialPlan from "@/components/goodsbatches/PartialPlan";
// import
export default {
  name: "customerForecast",
  components: {
    menuHeader,
    menuBox,
    tableHeader,
    tableBody,
    PartialPlan
  },
  data() {
    return {
      input1: "",
      currentPage4: 4,
      showPlans: false
    };
  },
  mounted() {},
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    showPlan() {
      this.showPlans = !this.showPlans;
    }
  }
};
</script>
<style lang="less" scoped>
.table-box {
  margin: 20px;
}
.operation-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .button-left,
  .button-right {
    margin: 20px;
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
