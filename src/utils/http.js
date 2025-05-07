import { useUserStore } from '@/stores/userStore';
import axios from 'axios'
import { ElMessage } from 'element-plus';
const http = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
});

// axios请求拦截器，进行token身份验证
http.interceptors.request.use(config => {
    const userStore = useUserStore()
    const token = userStore.userInfo.token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, e => Promise.reject(e))

// axios响应拦截器，进行错误的统一提示比如token失效的处理
http.interceptors.response.use(res => res.data, e => { 
    ElMessage({
        type: 'error',
        message: e.response.data.message
    })
    // 401token失效处理
    const userStore = useUserStore()
    if (e.response.status === 401) {
        userStore.clearUserInf()
        router.push('/login')
    }
    
    return Promise.reject(e)
})

export default http
