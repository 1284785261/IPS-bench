import service from '../axios/axios'

export const userLogin = data => {
    return service({
        url: '/XXXX/user/xxxx',
        method: 'post',
        data
    })
}

/* 下面是GET形式 */
export const userInfo = params => {
    return service({
        url: '/XXXX/user/XXXXX.action',
        method: 'get',
        params
    })
}