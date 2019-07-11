<template>
  <div class="menu-Box">
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
    <Logo :collapse="collap"></Logo>
    <el-menu :default-active="selectIndex" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <div v-for="item in menuboxList">
        <el-menu-item :index="item.index" v-if="item.children && item.children.length < 1" @click="gotos(item)">
          <i :class="item.icon"></i>
          <span slot="title">{{item.title}}</span>
        </el-menu-item>
        <el-submenu :index="item.index" v-else>
          <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title">{{item.title}}</span>
          </template>
          <el-menu-item-group v-if="item.children.length > 0">
            <el-menu-item :index="ite.index" v-for="(ite,index) in item.children" :key="index" @click="gotos(ite)">{{ite.title}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </div>
    </el-menu>
  </div>
</template>

<script>
import Logo from "./Logo";
export default {
  components: {
    Logo
  },
  // 调度，财务，客服模块
  data() {
    return {
      isCollapse: false,
      collap: true,
      menuboxList: [
        {
          index: "1",
          title: "客户预报",
          route: "/customerForecast",
          icon: "el-icon-user",
          children: []
        },
        {
          index: "2",
          title: "分拨预报管理",
          route: "/PartialForecast",
          icon: "el-icon-share",
          children: [
            {
              index: "2-1",
              title: "发起预报",
              route: "/initiateForecast"
            },
            {
              index: "2-2",
              title: "接受预报",
              route: "/ForecastManagement"
            }
          ]
        },
        {
          index: "3",
          title: "更新管理",
          route: "/ForecastManagement",
          icon: "el-icon-refresh",
          children: []
        },
        {
          index: "4",
          title: "仓库管理",
          route: "",
          icon: "el-icon-s-order",
          children: [
            {
              index: "4-1",
              title: "分批申请",
              route: "/PartialApplication"
            },
            {
              index: "4-2",
              title: "分批计划",
              route: "/PartialPlan"
            },
            {
              index: "4-3",
              title: "分批查询",
              route: ""
            }
          ]
        },
        // {
        //   index: "5",
        //   title: "分批管理",
        //   route: "",
        //   children: []
        // },
        {
          index: "5",
          title: "出库管理",
          route: "",
          icon: "el-icon-s-home",
          children: [
            {
              index: "5-1",
              title: "计划出库",
              route: "/PlanDelivery"
            },
            {
              index: "5-2",
              title: "计划出库管理",
              route: "/PlanoutboundManagement"
            },
            {
              index: "5-3",
              title: "自定义出库",
              route: "/CustomLibrary"
            }
          ]
        },
        {
          index: "6",
          title: "发车单管理",
          route: "/StartSingle",
          icon: "el-icon-truck",
          children: []
        },
        {
          index: "7",
          title: "上门提货",
          route: "/doorDelivery",
          icon: "el-icon-mobile",
          children: []
        }
      ],
      selectIndex: "1"
    };
  },
  mounted() {
    if (localStorage.getItem("selectIndex")) {
      this.selectIndex = localStorage.getItem("selectIndex");
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    gotos(item) {
      console.log(item);
      // this.selectIndex = item.index;
      localStorage.setItem("selectIndex", item.index);
      this.$router.push({ path: item.route });
    }
  }
};
</script>
<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
  min-height: 400px;
  // background: #ccc;
}
.menu-Box {
  float: left;
  width: 200px;
  height: 100%;
  background: #fff;
  border-right: 1px solid #e6e6e6;
  // background: #ccc;
}
</style>
