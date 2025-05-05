import http from '@/utils/http'

export function getCategoryApi() {
    return http.get('/home/category/head')
}