<template>
  <section class="search-view">
    <search-form v-on:submitSearch="getSearchResults($event)"
    ></search-form>
    <search-grid :searchResults="searchResults"></search-grid>
  </section>
</template>

<script>
import SearchForm from '../components/SearchForm'
import SearchGrid from '../components/SearchGrid'
import { movieSearch } from '../utilities'; 

export default ({
  name: 'Search',
  components: {
    SearchForm,
    SearchGrid
  },
  data() {
    return {
      searchResults: []
    }
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
