import Vue from 'vue';
import router from 'vue-router'
import Invest from "@/components/Invest.vue";
import Atelier from "@/components/Atelier.vue";
import Hala from "@/components/Hala.vue";
Vue.use(router);
const routes = [
 {
        path: "/",
        component: Invest
 },
  {
    path: "/investitii",
    component: Invest
  },
  {
    path: "/atelier",
    component: Atelier
  },
  {
    path: "/hala",
    component: Hala
  }
];

const router1 = new router({
    routes
})

export default router1;
