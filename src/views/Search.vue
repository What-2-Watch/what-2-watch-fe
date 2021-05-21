<template>
  <section class="search-view">
    <search-form 
    v-on:submitSearch="getSearchResults($event)"
    :genres="allGenres"
    :languages="allLanguages"
    :regions="allRegions"
    
    ></search-form>
    <search-grid :searchResults="searchResults"
    v-on:postThumb="updateThumb"></search-grid>
  </section>
</template>

<script>
import SearchForm from '../components/SearchForm'
import SearchGrid from '../components/SearchGrid'
import { movieSearch, getGenres, getRegions, postThumb } from '../utilities'; 



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
    updateThumb({api_movie_id, up}) {
      const thumb = {
        'user': this.user.id,
        api_movie_id,
        up,
        "title": "Sup",
        "api_actor_id": 234,
        "api_director_id": 345,
        "api_genre_id": 456,
        "api_similar_id": 000,    
      }
      postThumb(thumb)
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
