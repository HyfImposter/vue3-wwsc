import { loginAPI } from "@/apis/user";
export const useUserStore = defineStore('user', () => {
    // 定义管理用户数据的state
    const userInfo = ref({})
    // 定义获取接口数据的action函数
    const getUserInfo = async (user) => {
        const res = await loginAPI(user)
        userInfo.value = res.result
    }
    // 以对象的格式把state和action返回
    return {
        userInfo,
        getUserInfo,
    }
}, {
    persist: true
})