<template>
  <section class="search-view">
    <search-form 
    v-on:submitSearch="getSearchResults($event)"
    :genres="allGenres"
    :languages="allLanguages"
    :regions="allRegions"
    ></search-form>

    <search-grid :searchResults="searchResults"
    v-on:postThumb="updateThumb($event)"
    v-on:postWatchList="updateWatchList($event)"
    v-on:displayMovieModal="displayMovie($event)"></search-grid>
    
    <modal :movie="shownMovie" :showing="displayed"
    v-on:closeModal="displayMovie($event)"
    v-on:postThumb="updateThumb($event)"
    v-on:postWatchList="updateWatchList($event)"
    />
  </section>
</template>

<script>
import SearchForm from '../components/SearchForm'
import SearchGrid from '../components/SearchGrid'
import { movieSearch, getGenres, getRegions, postThumb, postWatchlist, getUserById, getUserId } from '../utilities'; 
import Modal from '../components/Modal'


export default ({
  name: 'Search',
  components: {
    SearchForm,
    SearchGrid,
    Modal
  },
  data() {
    return {
      searchResults: [],
      allGenres: [],
      allLanguages: [],
      allRegions: [],
      user: {},
      displayed: false,
      shownMovie: {},
    }
  },
  async mounted() {
    this.user = await getUserById(getUserId())

    Promise.all([getGenres(this.user.language), getRegions(this.user.language)])
    .then(responses => {
      this.allGenres = responses[0],
      this.allRegions = responses[1]
      console.log(responses);
    })
  },
  props: {
    userId: Number,
  },
  methods: {
    getSearchResults({ region, search, lang }) {
      const fetchStr = `&language=${lang}&query=${search}&watch_region=${region}`
      movieSearch(fetchStr)
      .then(data => this.searchResults = data)
    },
    updateThumb(thumb) {
      
      postThumb(thumb, getUserId())
      .then(res => console.log(res))
    },
    updateWatchList(obj) {
      obj.user = getUserId()
      postWatchlist(obj)
      .then(res => console.log(res))
    },
    displayMovie(movie) {
      if (this.displayed !== true && this.shownMovie !== movie) {
        this.shownMovie = movie;
        this.displayed = true;
      }
      else {
        this.shownMovie = {},
        this.displayed = false
      }
    }
    // setActiveGenres(genreId) {
    //   console.log(genreId)
    // v-on:changeGenreFilter="setActiveGenre($event)"
    //   // &with_genres=${18}
    // }
  }
})
</script>
