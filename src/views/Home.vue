<template>
  <section class="home-view">
    <Gallery 
    :listTitle="watchlist_title"
    :list="watchlist"/>
  </section>
</template>

<script>
import Gallery from '../components/Gallery';
import { getUserById, getMovieById, cleanMovieSearchData } from '../utilities'; 

export default {
  name: 'Home',
  components: {
    Gallery
  },
  data() {
    return {
      'watchlist_title':"My Watchlist",
      user: {},
      watchlist : []
    }
  },
  mounted() {
    getUserById(this.userId)
    .then(data => {
      this.user = data
      this.fetchWatchlistMovies()
      })
  },
  props: {
    userId: Number
  },
  methods: {
    fetchWatchlistMovies() {
      let movieList = this.user.watchlist.map(watchlistObj => {
        return getMovieById(watchlistObj.api_movie_id)
      })
      Promise.all(movieList)
      .then(responses => {
        this.watchlist = [...cleanMovieSearchData(responses)]
        console.log(responses)
      })
      
    }
}
}
</script>
<style scoped lang="scss">
@import '../index.scss';
  .home-view {
 
  }

</style>
