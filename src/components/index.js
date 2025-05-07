import ImageView from './ImageView/index.vue'
import Sku from "@/components/sku/index.vue"
export const componentPlugin = {
    install (app) {
        app.component("ImageView", ImageView)
        app.component("Sku", Sku) 
    }
}