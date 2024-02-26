import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import NewArticle from '../views/NewArticle.vue';
import PageArticle from '../views/PageArticle.vue';
import store from '../store'


const routes = [
    {
        path: '/',
        name: "HomePage",
        component: HomePage
    },
    {
        path: '/about',
        name: "AboutUs",
        component: () => import('../views/AboutUs.vue')
    },
    {
        path: '/article/:id',
        component: PageArticle,
        props: (route) => ({ article: store.state.articles.find((x) => x.id == route.params.id) })
    },
    {
        path: '/new',
        name: 'Add new article',
        component: NewArticle,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});


export default router;