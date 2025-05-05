import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { getCategoryApi } from './apis/testApi'

const app = createApp(App)

app.use(createPinia())
app.use(router)
getCategoryApi().then(res => {
    console.log(res);
})
app.mount('#app')

