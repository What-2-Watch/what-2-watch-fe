<template>
  <section class="search-view">
    <search-form 
    v-on:submitSearch="getSearchResults($event)"
    :genres="allGenres"
    :languages="allLanguages"
    :regions="allRegions"
    
    ></search-form>
    <search-grid :searchResults="searchResults"></search-grid>
  </section>
</template>

<script>
import SearchForm from '../components/SearchForm'
import SearchGrid from '../components/SearchGrid'
import { movieSearch, getGenres, getRegions } from '../utilities'; 



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
      console.log(fetchStr)
      movieSearch(fetchStr)
      .then(data => this.searchResults = data)
    },
    // setActiveGenres(genreId) {
    //   console.log(genreId)
    // v-on:changeGenreFilter="setActiveGenre($event)"
    //   // &with_genres=${18}
    // }
  }
})
</script>
