<template>
  <section class="search-view">
    <search-form 
    v-on:submitSearch="getSearchResults($event)"
    :genres="allGenres"
    :languages="allLanguages"
    :regions="allRegions"
    
    ></search-form>
    <search-grid :searchResults="searchResults"
    v-on:postThumb="updateThumb"
    v-on:postWatchList="updateWatchList"></search-grid>
  </section>
</template>

<script>
import SearchForm from '../components/SearchForm'
import SearchGrid from '../components/SearchGrid'
import { movieSearch, getGenres, getRegions, postThumb, postWatchlist } from '../utilities'; 



export default ({
  name: 'Search',
  components: {
    SearchForm,
    SearchGrid
  },
  data() {
    return {
      searchResults: [],
      allGenres: [],
      allLanguages: [],
      allRegions: []
    }
  },
  mounted() {

    Promise.all([getGenres(this.user.language), getRegions(this.user.language)])
    .then(responses => {
      this.allGenres = responses[0],
      this.allRegions = responses[1]
      console.log(responses);
    })
  },
  props: {
    user: Object,
  },
  methods: {
    getSearchResults({ region, search, lang }) {
      const fetchStr = `&language=${lang}&query=${search}&watch_region=${region}`
      movieSearch(fetchStr)
      .then(data => this.searchResults = data)
    },
    updateThumb(thumb) {
      
      postThumb(thumb, this.user.id)
      .then(res => console.log(res))
    },
    updateWatchList(obj) {
      obj.user = this.user.id
      postWatchlist(obj)
      .then(res => console.log(res))
    }
    // setActiveGenres(genreId) {
    //   console.log(genreId)
    // v-on:changeGenreFilter="setActiveGenre($event)"
    //   // &with_genres=${18}
    // }
  }
})
</script>
