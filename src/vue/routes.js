import movieslist from './components/movies-list.vue'
import movieitem from './components/movie-item.vue'
import movieedit from './components/movie-edit.vue'
import movieadd from './components/movie-add.vue'

export const routes = [
    { path: '/movies', component: movieslist },
    { path: '/movie/:id', component: movieitem },
    { path: '/movie/:id/edit', component: movieedit },
    { path: '/movie/add', component: movieadd }
];