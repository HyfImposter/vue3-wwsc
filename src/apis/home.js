import http from "@/utils/http";
/**
 * @description: 获取轮播图
 * @param {*}
 * @return {*}
 */
export function getBannerAPI() {
    return http.get('/home/banner');
}
export const getNewAPI = () => {
    return http.get('/home/new')
}
export const getHotAPI = () => {
    return http.get('/home/hot')
}
export const getGoodsAPI = () => {
    return http.get('/home/goods')
}