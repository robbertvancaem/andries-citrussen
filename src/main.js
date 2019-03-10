import Vue from "vue";
import VueRouter from "vue-router";
import { injectGlobal } from "vue-styled-components";

import Home from "./pages/home";
import Service from "./pages/service";
import NotFound from "./pages/notfound";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/service", component: Service },
  { path: "*", component: NotFound }
];

const router = new VueRouter({
  routes
});

new Vue({
  router
}).$mount("#app");

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-size: 20px;
    overflow: hidden;

    font-family: "Source Sans Pro", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::selection {
    background: #e84e2b;
    color: #fff;
  }

  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    color: #383230;
  }
`;
