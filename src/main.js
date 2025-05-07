import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { lazyPlugin } from './directives'

import App from './App.vue'
import router from './router'
import { useIntersectionObserver } from '@vueuse/core'
import { componentPlugin } from './components'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)
// app.directive('img-lazy', {
//     mounted(el, binding) {
//         const { stop } = useIntersectionObserver(
//             el,
//             ([{ isIntersecting }]) => {
//                 console.log(isIntersecting) // 判断图片是否在视口区域， 懒加载的精髓就在于在视口区才加载
//                 if (isIntersecting) {
//                     el.src = binding.value;
//                     stop();
//                 }
//             }
//         )
//     }
// })
const pinia = createPinia()
// app.use(createPinia())
pinia.use(piniaPluginPersistedstate)
app.use(router)
app.use(pinia)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')

