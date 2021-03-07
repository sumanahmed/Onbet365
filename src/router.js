import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        name:'home',
        component:() => import('./components/dashboard/Home'),
        // meta: { 
        //     hideNavigation: false,
        //     requiresAuth:true
        // }
    }
];

export const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    hashbang: false,
    routes
})
  
router.beforeEach((to, from, next) => {  
    if (to.matched.some(record => record.meta.requiresAuth)) {
        const token = localStorage.getItem('accessToken');
        if (!token) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        } else {
            next();
        }
    } else {
      next();
    }
})
