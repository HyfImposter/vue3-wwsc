import { getBannerAPI } from "@/apis/home";
import { onMounted } from "vue";

export function useBanner() {
    const bannerList =ref([])
    const getBanner = async () => {
        const res = await getBannerAPI('2')
        bannerList.value = res.result
    }
    onMounted(() => {
        getBanner()
    })

    return {
        bannerList
    }
}