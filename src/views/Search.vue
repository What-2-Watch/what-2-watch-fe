<template>
  <section class="search-view">
    <search-form v-on:submitSearch="getSearchResults($event)"></search-form>
    <search-grid></search-grid>
  </section>
</template>

<script>

import SearchForm from '../components/SearchForm'
import SearchGrid from '../components/SearchGrid'
export default ({
  name: 'Search',
  components: {
    SearchForm,
    SearchGrid
  },
  methods: {
    getSearchResults({lang, region, search, genre}) {
      const fetchStr = `&language=${lang + '-' + region}&=${search}&watch_region=${region}&with_genres=${genre}`
      console.log(fetchStr)
      this.$emit('fetchSearchResults', fetchStr)
    }
  }
})
</script>
