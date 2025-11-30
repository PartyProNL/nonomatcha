import NotFoundScreen from "./ui/error/NotFoundScreen.vue";
import HomeScreen from "./ui/home/HomeScreen.vue";

export const routes = [
    { path: '/', component: HomeScreen },
    { path: '/home', redirect: '/' },

    // Error
    { path: '/404', component: NotFoundScreen },
    { path: '/:pathMatch(.*)', redirect: '/404' }
]
