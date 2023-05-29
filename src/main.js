import 'vue-multiselect/dist/vue-multiselect.css'
import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Multiselect from 'vue-multiselect'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('multi-select', Multiselect)

app.mount('#app')
