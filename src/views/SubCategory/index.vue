<script setup>
import { getCategoryFilterAPI, getSubCategoryAPI } from '@/apis/category';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import GoodsItem from '../Home/components/GoodsItem.vue';

const filterData = ref({})
const route = useRoute()
const getFilterData = async (id) => {
    const res = await getCategoryFilterAPI(id)
    filterData.value = res.result
}
onMounted(() => getFilterData(route.params.id))

// 获取二级分类商品
const goodList = ref([])
const reqData = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime'
})
const getGoodList = async () => {
  const res = await getSubCategoryAPI(reqData.value)
  goodList.value = res.result.items
}
// tab切换回调
const tabChange  = () => {
    console.log("tab changed", reqData.value.sortField)
    reqData.value.page = 1
    getGoodList()
}
onMounted(() => getGoodList())
// 加载更多 + 无数据停止加载
const disabled = ref(false)
const load= async () => {
    console.log("加载更多数据咯")
    reqData.value.page++
    console.log(reqData.value.page)
    const res = await getSubCategoryAPI(reqData.value)
    goodList.value = [...goodList.value, ...res.result.items]
    if (res.result.items.length === 0) {
        disabled.value = true
    }
}




</script>
<template>
    <div class="container">
        <div class="bread-container">
            <el-breadcrumb seprator=">">
                <el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{path:  `/category/${filterData.parentId}`}">{{ filterData.parentName }}</el-breadcrumb-item>
                <el-breadcrumb-item>{{ filterData.name }}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="sub-container">
            <el-tabs v-model="reqData.sortField" @tab-change="tabChange">
                <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
                <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
                <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
            </el-tabs>
            <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
                <GoodsItem v-for="good in goodList" :good="good" :key="good.id"></GoodsItem>
            </div>
        </div>
    </div>

</template>
<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>