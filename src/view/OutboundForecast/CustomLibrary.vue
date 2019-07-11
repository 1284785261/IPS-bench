
<template>
  <div class="bg">
    <menuBox></menuBox>
    <div class="box-content">
      <menuHeader></menuHeader>
      <div class="table-box">
        <table-Header></table-Header>
        <div class="operation-box">
          <div class="button-left">
            <!-- <el-button type="primary" icon="el-icon-plus" @click="shownewManags">新增</el-button>
            <el-button type="primary" icon="el-icon-minus" @click="shownewManags">减少</el-button>
            <el-button type="primary" icon="">作废</el-button> -->
          </div>
          <div class="button-right">
            <!-- <el-button type="primary" @click="GenerateNumber">生成出库单</el-button> -->
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
    <new-Management :shownewManag="shownewManag"></new-Management>
  </div>
</template>
<script>
import menuHeader from "@/components/menuHeader";
import menuBox from "@/components/menuBox";
import tableHeader from "@/components/tabaeHead";
import tableBody from "@/components/OutboundForecast/tableBody";
import newManagement from "@/components/OutboundForecast/newManagement";
// import
export default {
  name: "customerForecast",
  components: {
    menuHeader,
    menuBox,
    tableHeader,
    tableBody,
    newManagement
  },
  data() {
    return {
      input1: "",
      currentPage4: 4,
      shownewManag: {
        show: false,
        title: "新增"
      }
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
    shownewManags() {
      this.shownewManag.show = !this.shownewManag.show;
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
