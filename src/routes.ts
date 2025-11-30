import NotFoundScreen from "./ui/error/NotFoundScreen.vue";
import HomeScreen from "./ui/home/HomeScreen.vue";
import ProductPage from "./ui/shop/product/ProductPage.vue";
import ShopPage from "./ui/shop/ShopPage.vue";

export const routes = [
    { path: '/', component: HomeScreen },
    { path: '/home', redirect: '/' },

    { path: '/shop', component: ShopPage },
    { path: '/shop/product/:id', component: ProductPage },

    // Error
    { path: '/404', component: NotFoundScreen },
    { path: '/:pathMatch(.*)', redirect: '/404' }
]
