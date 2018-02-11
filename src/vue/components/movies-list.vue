<template>


<div>
    Les films
    <ul>
        <li v-for="m in movies">
            {{ m.titre }}<br>
            {{ m.annee }}<br>
            {{ m.langue }}<br>
            {{ m.realisateur.nom }} {{ m.realisateur.prenom }}<br>
            {{ m.genre }}<br>
            <router-link :to="{ path: 'movie/:id', params: { id: m.id }}">Lien</router-link>

        </li>
    </ul>
</div>




</template>

<script>

    import { my_store } from '../store.js'

    export default {
        props: [ "movie", "index"],
        name: 'movieslist',
        store: my_store,
        data() {
            return {

            }
        },
        mounted: function(){
            this.$store.dispatch('getAllMovies')
        },
        computed: {
            movies: {
                get: function () {
                    return this.$store.state.movies;
                },
                set: function (val) {
                    this.$store.commit('updateFilm', val);
                }
            }
        }
    }
</script>