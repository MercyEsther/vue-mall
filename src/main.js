import Vue from 'vue';
import router from './router/index.js';
import "./css/common.css";
import "./js/fontSizeAdapt.js";
import store from "./store";

Vue.config.productionTip = false


new Vue({
  router,
  store
}).$mount("#app");
