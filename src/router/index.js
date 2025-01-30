import AppAbout from "@/views/AppAbout.vue";
import AppContact from "@/views/AppContact.vue";
import AppHome from "@/views/AppHome.vue";
import { createWebHistory, createRouter } from "vue-router";


const routes = [
  {
    path: '/',
    name:"AppHome",
    component: AppHome
  },
  {
    path: '/contact',
    name:"AppContact",
    component: AppContact
  },
  {
    path:'/about',
    name:"AppAbout",
    component:AppAbout
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;