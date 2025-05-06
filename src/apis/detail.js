import http from "@/utils/http";

/**
 * @description: 根据id获得商品详情
 * @param {*} id 分类id
 * @return {*}
 */
export function getDetail(id) {
    return http.get('/goods', {params: {id}})
}