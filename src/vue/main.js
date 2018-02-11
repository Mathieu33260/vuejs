import Vue from 'vue' //librairie "vue" dans node_modules
import accueil from './components/accueil.vue' //fichier app.vue local
import { my_store } from './store.js';
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { routes } from "./routes";

Vue.use(Vuex);
Vue.use(VueRouter);

const router = new VueRouter({
    routes
});

new Vue({
    el: '#app',
    render: h => h(accueil),
    store: my_store,
    router
});