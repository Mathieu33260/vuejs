import Vue from 'vue' //librairie "vue" dans node_modules
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

function search(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].name === nameKey) {
            return myArray[i];
        }
    }
}

export const my_store = new Vuex.Store({
    state: {
        movies: []
    },
    mutations: {
        setMovies(state, movies)
        {
            state.movies = movies;
        },
        updateFilm(state, filmRef, film)
        {
            state.movies[search(filmRef.title,movies)] = film;
        },
        updateMovies(state, films)
        {
            state.movies = films;
        },
        createFilm(state, film)
        {
            state.movies[index].push(film);
        },
        removeFilm(state, index)
        {
            state.movies[index].splice(index,1);
        }
    },
    actions: {
        getAllMovies(context)
        {
            axios.get('/api/movies/all')
                .then(response => {
                    context.commit('setMovies', response.data);
                })
        },
        getMovie(context)
        {
            axios.get('/api/movies/:id')
                .then(response => {
                    context.commit('setMovies', response.data);
                })
        }
    }
});