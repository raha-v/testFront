import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import router from './router/index'
import store from './store/index';

const app =createApp(App)
app.use(store)
app.use(router)

app.use(VueAxios,axios)

app.mount('#app')
