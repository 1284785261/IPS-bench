import axios from 'axios'
import { Message } from 'element-ui';
import qs from 'qs';
var service = axios.create({
    baseUrl: "http://192.168.50.14:7500/OrderOnline/api/",
    timeout: 5000,
    headers: {
        // 'content-type': 'application/json',
        // "token":'14a1347f412b319b0fef270489f'
    }
})


service.interceptors.request.use(config => {
    // app.$vue.loading.show({
    //     text: '数据加载中'
    // })

    config.method === 'post' ? config.data = qs.stringify({ ...config.data }) : config.params = { ...config.params };
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    return config;
}, error => {
    // app.$vue.toast.show({
    //     type: 'warn',
    //     text: error
    // });
    Promise.reject(error)
})

service.interceptors.response.use(
    response => { //成功对数据处理
        // app.$vux.loading.hide();
        if (response) {
            return response.data;
        } else {
            // app.$vux.toast.show({   //常规错误处理
            //     type: 'warn',
            //     text: error
            // })
        }
    },
    error => { //响应错误
        let text = '';
        let err = JSON.parse(JSON.stringify(error))
        if (err.response.status) {
            switch (error.response.status) {
                case 400:
                    text = '请求错误(400)，请重新申请'
                    break
                case 401:
                    text = '登录错误(401)，请重新登录'
                    return this.$router.replace('/Login')
                case 403:
                    text = '拒绝访问(403)'
                    break
                case 404:
                    text = '请求出错(404)'
                    break
                default:
                    text = '网络连接出错'
            }
        }
        // app.$vux.toast.show({   
        //     type: 'warn',
        //     text: text
        // })
        return Promise.reject(error)
    }
)


export default service;
