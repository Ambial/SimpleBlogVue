import Vue from "vue";

import moment from "moment";
import VueMoment from "vue-moment";
import App from "./App.vue";

Vue.use(VueMoment, moment);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
