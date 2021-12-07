import Vue from 'vue';
import App from './App.vue';
import store from './store';
import axios from 'axios';

axios.defaults.baseURL =
    process.env.NODE_ENV === 'production' ? 'https://backend-server.com/' : 'http://localhost:3000';
Vue.config.productionTip = false;

new Vue({
    store,
    render: h => h(App),
}).$mount('#app');
