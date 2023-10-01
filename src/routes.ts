import { createRouter, createWebHistory } from 'vue-router';
import TProductCardPage from 'src/pages/TProductCardPage.vue';
import THomePage from 'src/pages/THomePage.vue';

const routes = [
  { path: `${__BASE_PREFIX__}/`, component: THomePage },
  { path: '/product', component: TProductCardPage },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
