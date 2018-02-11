<template>

    <div>

        <nav>
            <div class="nav-wrapper">
                <a href="/">Accueil</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><router-link :to="{ path: '/movies' }">Les films</router-link></li>
                    <li><router-link :to="{ path: '/movie/add' }">Ajouter</router-link></li>
                </ul>
            </div>
        </nav>

        <router-view></router-view>

    </div>

</template>

<script>

    import { my_store } from '../store.js'

    export default {
        store: my_store,
        data() {
            return {

            }
        }
    }

</script>