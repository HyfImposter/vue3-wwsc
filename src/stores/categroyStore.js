import { ref, onMounted } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'

export const useCategoryStore = defineStore('category', () => {
  const categoryList = ref([])
  const getCategory = async () => {
      let res = await getCategoryAPI();
      console.log(res.result);
      categoryList.value = res.result;
  }
  onMounted(() => {
      getCategory();
  })

  return { categoryList, getCategory}
})
