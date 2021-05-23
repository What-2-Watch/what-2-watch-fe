<template>
    <section class='gallery-display'>
        <h2 class='gallery-title'>{{ listTitle || 'Recommendations' }}</h2>
            <swiper
            :slides-per-view="5"
            :space-between="50"
            :scrollbar="{ draggable: true }"
            :navigation="true"
            >
            <swiper-slide :key="card.id" v-for="card in list">
             <MovieCard :list="listTitle" :movie="card"
             v-on:clickMovie="showMovie($event)"/>
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
        listTitle: String,
        list: Array
    }, 
    components: {
        MovieCard,
        Swiper,
        SwiperSlide,
    },
    methods: {
        showMovie(movie) {
            this.$emit('displayMovieModal', movie)
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