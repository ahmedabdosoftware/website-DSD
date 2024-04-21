import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Details from '../views/Details.vue'
//import Tracking from '../views/Tracking.vue'
import store from '../store/index.js'; // استيراد المتجر Vuex

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Details/:id',
    name: 'Details',
    component: Details,
    meta: { hideHeader: true } // تعيين خاصية meta لإخفاء الهيدر
    
  },
  {
    path: '/TrackOrder/:id',
    name: 'TrackOrder',
    
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TrackOrder.vue'),
    meta: { hideHeader: true }, // تعيين خاصية meta لإخفاء الهيدر
  },
 
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.hideHeader) {
    store.dispatch('updateShowHeader', false);
  } else {
    store.dispatch('updateShowHeader', true);
  }
  next();
});

export default router
