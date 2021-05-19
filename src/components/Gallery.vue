<template>
    <section class='gallery-display'>
        <h2 class='gallery-title'>{{ listTitle || 'Recommendations' }}</h2>

         
            <swiper
            :slides-per-view="5"
            :space-between="50"
            :scrollbar="{ draggable: true }"
            
            >

            <swiper-slide :key="movie.id" v-for="movie in movieList">
             <MovieCard :list="listTitle" :movie="movie"/>
            </swiper-slide>
            </swiper>
    </section>
</template>

<script>
import MovieCard from '../components/MovieCard';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import { Swiper, SwiperSlide } from 'swiper/vue';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default { 
    name: 'Gallery', 
    props: {
        listTitle: {type: String},
    }, 
    components: {
        MovieCard,
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            movieList: [{id: 0, title: "Us baby!", src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"}, {id: 1, title: "Us baby!", src:"https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"}, {id: 2, title: "Us baby!", src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"},  {id: 3, title: "Us baby!", src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"},  {id: 4, title: "Us baby!", src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"},  {id: 5, title: "Us baby!", src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"},  {id: 6, title: "Us baby!", src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"},  {id: 7, title: "Us baby!", src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"},  {id: 8, title: "Us baby!", src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"},  {id: 9, title: "Us baby!", src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"},  {id: 10, title: "Us baby!", src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"},  {id: 11, title: "Us baby!", src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"},  {id: 12, title: "Us baby!", src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"},
              {id: 13, title: "Us baby!", src: "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758"}]
        }
    },
    methods: {
        upVote() {
            
        }, 
        downVote() {

        }, 
        AddToWatchList() {

        }, 
        removeFromWatchList() {

        }
    }
}
</script>

<style scoped lang='scss'>
@import '../index.scss';


    .gallery-display {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding: 30px 20px;
    }

    .gallery-title {
        color: $gray;
        margin: 10px;
        border-bottom: 1px solid $gray; 
    }
    .swiper-container {
        padding: 20px;
    }

</style>