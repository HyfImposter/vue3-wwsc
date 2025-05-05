<script setup>
import LayoutFixed from './components/LayoutFixed.vue';
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutNav from './components/LayoutNav.vue';
</script>
<template>
    <LayoutFixed></LayoutFixed>
    <LayoutNav></LayoutNav>
    <LayoutHeader></LayoutHeader>
    <RouterView /> 
    <LayoutFooter></LayoutFooter>
</template>
<style lang="scss">
</style>