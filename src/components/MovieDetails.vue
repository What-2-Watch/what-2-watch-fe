<template>
    <section>
        <div class="detail-splash">
            <img class="backdrop">
            <div class="title-box">
                <h2>{{ movie.title }}</h2>
                <h3>{{ movie.tagline }}</h3>
            </div>
        </div>
        <div class="details-box">
            <p>{{ movie.runtime }}</p>
            <p>{{ movie.release_date }}</p>
            <p>{{ movie.user_rating }}</p>
            <div class="genres-box">
            </div>
        </div>
        <article class="overview-box">
            {{ movie.overview }}
        </article>
        <aside class="button-box">
            <p>thumbs</p>
            <p>watchlist</p>
        </aside>

    </section>
</template>

<script>
export default {
    name: 'MovieDetails',
    props: {
        movie: Object
    }, 
    data() {
        return{
            movieDetails:this.movie
        }
    }
}   
</script>

<style scoped lang="scss">

</style>


