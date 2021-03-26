import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        name:'home',
        component:() => import('./components/dashboard/Home'),
    },
    {
        path:'/register',
        name:'register',
        component:() => import('./components/auth/Register'),
    },
    {
        path:'/upcoming',
        name:'upcoming',
        component:() => import('./components/dashboard/Upcoming')
    },
    {
        path:'/single-match:id?',
        name:'single-match',
        component:() => import('./components/dashboard/SingleMatch')
    },
    {
        path:'/profile',
        name:'profile',
        component:() => import('./components/profile/Profile'),   
        meta: { requiresAuth:true }    
    },
    {
        path:'/profile-edit',
        name:'profile-edit',
        component:() => import('./components/profile/ProfileEdit'),     
        meta: { requiresAuth:true }    
    },
    {
        path:'/change-club',
        name:'change-club',
        component:() => import('./components/profile/ChangeClub'),
        meta: { requiresAuth:true } 
    },
    {
        path:'/club-members',
        name:'club-members',
        component:() => import('./components/profile/ClubMembers'),
        meta: { requiresAuth:true } 
    },
    {
        path:'/change-password',
        name:'change-password',
        component:() => import('./components/profile/ChangePassword'),
        meta: { requiresAuth:true } 
    },
    {
        path:'/sponsors',
        name:'sponsors',
        component:() => import('./components/profile/Sponsors'),
        meta: { requiresAuth:true } 
    },
    {
        path:'/bet-details',
        name:'bet-details',
        component:() => import('./components/profile/BetDetails'),
        meta: { requiresAuth:true } 
    },
    
    {
        path:'/deposit-request',
        name:'deposit-request',
        component:() => import('./components/wallet/DepositRequest'),
        meta: { requiresAuth:true } 
    },
    {
        path:'/deposit-details',
        name:'deposit-details',
        component:() => import('./components/wallet/DepositDetails'),
        meta: { requiresAuth:true } 
    },
    {
        path:'/coin-transfer',
        name:'coin-transfer',
        component:() => import('./components/wallet/CoinTransfer'),
        meta: { requiresAuth:true } 
        
    },
    {
        path:'/coin-transfer-details',
        name:'coin-transfer-details',
        component:() => import('./components/wallet/CoinTransferDetails'),
        meta: { requiresAuth:true } 
    },
    {
        path:'/coin-receive-details',
        name:'coin-receive-details',
        component:() => import('./components/wallet/CoinReceiveDetails'),
        meta: { requiresAuth:true } 
    },
    {
        path:'/withdraw-request',
        name:'withdraw-request',
        component:() => import('./components/wallet/WithdrawRequest'),
        meta: { requiresAuth:true } 
    },
    {
        path:'/withdraw-details',
        name:'withdraw-details',
        component:() => import('./components/wallet/WithdrawDetails'),
        meta: { requiresAuth:true } 
    },
    {
        path: '*',
        component: () => import('./components/NotFoundPage'),
        meta: { hideNavigation: true } 
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
                path: '/',
                query: { redirect: to.fullPath }
            })
        } else {
            next();
        }
    } else {
      next();
    }
})
