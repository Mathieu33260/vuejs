<template>


    <div>
        Ajouter un film

    </div>




</template>

<script>

    import { my_store } from '../store.js'

    export default {
        props: [ "movie", "index"],
        name: 'movieitem',
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