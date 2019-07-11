import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      meta: {
        title: '登录界面',
        hidden: true
      },
      component: h => import('../view/login/login.vue'),
    },
    {
      path: '/customerForecast',
      name: 'customerForecast',
      meta: {
        title: '客户预报',
        hidden: true
      },
      component: h => import('../view/customerForecast/customerForecast.vue'),
    },
    {
      path: '/PartialForecast',
      name: 'PartialForecast',
      meta: {
        title: '分批预报',
        hidden: true
      },
      component: h => import('../view/PartialForecast/PartialForecast.vue'),
    }, {
      path: '/initiateForecast',
      name: 'initiateForecast',
      meta: {
        title: '发起预报',
        hidden: true
      },
      component: h => import('../view/ForecastManagement/initiateForecast.vue'),
    }, {
      path: '/ForecastManagement',
      name: 'ForecastManagement',
      meta: {
        title: '接受预报',
        hidden: true
      },
      component: h => import('../view/ForecastManagement/ForecastManagement.vue'),
    },
    {
      path: '/PartialApplication',
      name: 'PartialApplication',
      meta: {
        title: '分批申请',
        hidden: true
      },
      component: h => import('../view/goodsbatches/PartialApplication.vue'),
    },
    {
      path: '/PartialPlan',
      name: 'PartialPlan',
      meta: {
        title: '分批计划',
        hidden: true
      },
      component: h => import('../view/goodsbatches/PartialPlan.vue'),
    },
    {
      path: '/PlanDelivery',
      name: 'PlanDelivery',
      meta: {
        title: '计划出库',
        hidden: true
      },
      component: h => import('../view/OutboundForecast/PlanDelivery.vue'),
    },
    {
      path: '/PlanoutboundManagement',
      name: 'PlanoutboundManagement',
      meta: {
        title: '计划出库管理',
        hidden: true
      },
      component: h => import('../view/OutboundForecast/PlanoutboundManagement.vue'),
    },
    {
      path: '/CustomLibrary',
      name: 'CustomLibrary',
      meta: {
        title: '自定义出库',
        hidden: true
      },
      component: h => import('../view/OutboundForecast/CustomLibrary.vue'),
    }, {
      path: '/StartSingle',
      name: 'StartSingle',
      meta: {
        title: '发车单管理',
        hidden: true
      },
      component: h => import('../view/StartSingle/StartSingle.vue'),
    },
    {
      path: '/doorDelivery',
      name: 'doorDelivery',
      meta: {
        title: '上门提货',
        hidden: true
      },
      component: h => import('../view/doorDelivery/doorDelivery.vue'),
    }
  ]
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
  console.log('navigation-guards');
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
  const route = ['home', 'list'];
  let isLogin = isLogin;  // 是否登录
  // 未登录状态；当路由到route指定页时，跳转至login
  if (route.indexOf(to.name) >= 0) {
    if (!isLogin) {
      if (from.name === 'UserLogIn') {
        next('/')
        return
      }
      // 登录后，跳到到当前页面
      router.push({
        name: 'UserLogIn',
        params: { redirect: to.fullPath }
      })

    }
  }
  // 已登录状态；当路由到login时，跳转至home 
  if (to.name === 'login') {
    if (isLogin) {
      this.$router.push({ path: '/home', });;
    }
  }
  next();
});


export default router;