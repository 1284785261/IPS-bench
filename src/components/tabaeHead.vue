<template>
  <div class="table-header">
    <div class="grids">
      <el-row :gutter="10">
        <el-col :span="7">
          <div class="grid-content bg-purple">
            <div class="demo-input-suffix">
              <span class="title">单号：</span>
              <el-input placeholder="" v-model="input1">
              </el-input>
            </div>
          </div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content bg-purple">
            <div class="demo-input-suffix">
              <span class="title">客户编码/名称：</span>
              <el-input placeholder="" v-model="input1">
              </el-input>
            </div>
          </div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content bg-purple">
            <div class="demo-input-suffix">
              <span class="title">国家：</span>
              <el-input placeholder="" v-model="input1">
              </el-input>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="7">
          <div class="grid-content bg-purple">
            <div class="demo-input-suffix">
              <span class="title">销售产品：</span>
              <el-input placeholder="" v-model="input1">
              </el-input>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <div class="demo-input-suffix">
              <span class="title">时间区间：</span>
              <el-date-picker v-model="value2" type="daterange" align="left" unlink-panels range-separator="——" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions">
              </el-date-picker>
            </div>
          </div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content bg-purple">
          </div>
        </el-col>
      </el-row>
    </div>

    <div>
      <el-button type="primary" class="buttons1">重置</el-button>
      <el-button type="primary" class="buttons2">查询</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "tabaeHead",
  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      value2: ""
    };
  }
};
</script>

<style lang="less" scoped>
.demo-input-suffix {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: right;
  min-width: 260px;
  .title {
    display: inline-block;
    min-width: 120px;
  }
}
.table-header {
  padding: 20px;
  height: 120px;
  border-bottom: 20px solid #e9e7e7;
  .grids {
    width: 75%;
    float: left;
  }
  .el-row {
    height: 60px;
  }
}
.buttons1 {
  margin-top: 60px;
  padding: 10px 38px;
  background: #fff;
  border: 1px solid #999;
  color: #999;
}
.buttons2 {
  margin-top: 60px;
  padding: 10px 38px;
  background: #256ad1;
  border: 1px solid #256ad1;
  color: #fff;
}
</style>
