import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App'
import Home from './content/Home';
import Service from './content/Service';

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/service', component: Service}
]

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
