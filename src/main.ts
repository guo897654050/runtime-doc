import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'element-plus/dist/index.css'
import router from './router'

createApp(App)
  .use(router)
  .mount('#app')