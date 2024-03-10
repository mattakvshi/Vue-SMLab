import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import NewArticle from '../views/NewArticle.vue';
import PageArticle from '../views/PageArticle.vue';
import CancelOrFailedState from '../components/CancelOrFailedState.vue'
//import store from '../store'
import { useArticlesStore } from '../store'


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
        //props: (route) => ({ article: store.state.articles.find((x) => x.id == route.params.id) })
        props: (route) => {
            // Получаем магазин статей
            const articlesStore = useArticlesStore();
            // Находим статью по идентификатору
            return { article: articlesStore.getArticles.find((x) => x.id == route.params.id) };
        }
    },
    {
        path: '/new',
        name: 'Add new article',
        component: NewArticle,
    },
    {
        path: '/cancelorfailed',
        name: 'Cansel load',
        component: CancelOrFailedState

    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});


export default router;