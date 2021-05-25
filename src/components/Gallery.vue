<template>
    <section class='gallery-display'>
        <h2 class='gallery-title'>{{ listTitle || 'WATCH LIST' }}</h2>
        <section class="card-slider" v-if="list.length">
            <li :key="card.id" v-for="card in list">
                <MovieCard :list="listTitle" :movie="card"
                v-on:clickMovie="showMovie($event)"/>
            </li>
        </section>
        <p v-else>You havent added anything to your watchlist yet, press the + Watchlist button on a poster you like to save it for later.</p>
    </section>
</template>

<script>
import MovieCard from '../components/MovieCard';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default { 
    name: 'Gallery', 
    props: {
        listTitle: String,
        list: Array
    }, 
    components: {
        MovieCard,
    },
    methods: {
        showMovie(movie) {
            this.$emit('displayMovieModal', movie)
        }
    }, 
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

    .card-slider {
        display: flex;
        overflow-x: scroll;
        overflow-y: hidden;
        padding-bottom: 45px;
        .card-container {
            margin: 35px;
            height: 300px;
            width: 200px;
        }
    }
    .card-slider::-webkit-scrollbar {
        height: 6px;
       @include serviceScroll;
    }
    .card-slider::-webkit-scrollbar-thumb {
        @include serviceScrollThumb
    }
    

</style>