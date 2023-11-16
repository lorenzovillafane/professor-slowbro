import {createRouter,createWebHistory} from "vue-router";
import Home from '../pages/Home.vue'
import Tcg from '../pages/Tcg.vue'
import Vgc from '../pages/Vgc.vue'
import Unite from '../pages/Unite.vue'
import Forum from '../pages/Forum.vue'

const routes =[
    {
        path:'/',
        component:Home
    },
    {
        path:'/Tcg',
        component:Tcg
    },
    {
        path:'/Vgc',
        component:Vgc
    },
    {
        path:'/Unite',
        component:Unite
    },
    {
        path:'/Forum',
        component:Forum
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router