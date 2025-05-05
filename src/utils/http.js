import axios from 'axios'
const http = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
});

// axios请求拦截器，进行token身份验证
http.interceptors.request.use(config => {
    return config
}, e => Promise.reject(e))

// axios响应拦截器，进行错误的统一提示比如token失效的处理
http.interceptors.response.use(res => res.data, e => { 
    return Promise.reject(e)
})

export default http
