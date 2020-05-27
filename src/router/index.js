import Vue from 'vue';
import VueRouter from 'vue-router';

const home = () => import('../views/home/home')
const upload = () => import('../views/upload/upload')
const user = () => import('../views/user/user')
const list = () => import('../views/list/list')

Vue.use(VueRouter)

const routes = [
    {
        path:'',
        redirect:'/home',
    },
    {
        path: '/home',
        component:home,
    },
    {
        path: '/upload',
        component:upload,
    },
    {
        path: '/user',
        component:user,
    },
    {
        path: '/list',
        component:list,
    }
]
const router = new VueRouter({
    routes,
    mode:'history'
})

export default router