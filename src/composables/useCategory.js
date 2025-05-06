import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { getTopCategoryAPI } from "@/apis/category";
import { onMounted } from "vue";


export function useCategory() {
    const categoryData = ref({})
    const route = useRoute()
    const getCategory = async (id) => {
        const res = await getTopCategoryAPI(route.params.id)
        categoryData.value = res.result
    }
    onMounted(()=>getCategory())
    onBeforeRouteUpdate((to) => {
        getCategory(to.params.id)
    })
    return {
        categoryData
    }
}