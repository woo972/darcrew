import Home from '../components/Home'
import Forum from '@/screens/Forum.vue'
import Post from '@/components/Post.vue'

import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Forum },
        { path: '/home', name: 'Home', component: Home },
        { path: '/forum', name: 'Forum', component: Forum },
        { path: '/posts/:postId', name: 'Post', component: Post },
    ]
})

export default router