// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/js/bootstrap.min'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
library.add(faCoffee);
// library.add(faPeriscope);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(ElementUI);

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App }
})
