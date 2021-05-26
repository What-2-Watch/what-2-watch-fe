<template>
  <section class="search-view">
    <search-form 
    v-on:submitSearch="getSearchResults($event)"
    ></search-form>

    <article v-if="failedSearch" class="search-message">
      <h3>No movies found</h3>
    </article>

    <article v-else-if="!searchResults.length" class="search-message">
      <h2>Search for movies and use the thumbs to tell us what you like. We'll tailor your recommedations based on your taste in movies.</h2>
      <h2></h2>
    </article>

    <search-grid :searchResults="searchResults"
    v-on:postThumb="updateThumb($event)"
    v-on:postWatchList="updateWatchList($event)"
    v-on:displayMovieModal="displayMovie($event)"
    data-cy='search-grid'></search-grid>
    
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
      failedSearch: false
    }
  },
  async mounted() {
    this.failedSearch = false;
    this.user = await getUserById(getUserId())
    Promise.all([getGenres(this.user.language), getRegions(this.user.language)])
    .then(responses => {
      this.allGenres = responses[0],
      this.allRegions = responses[1]
    })
  },
  methods: {
    getSearchResults({ region, search, lang }) {
      this.failedSearch = false;
      const fetchStr = `&language=${lang}&query=${search}&watch_region=${region}`
      movieSearch(fetchStr)
      .then(data =>   {
        if (!data.length) {
          this.failedSearch = true;
        }
        this.searchResults = data
      })
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
  }
})
</script>

<style lang="scss">
  @import '../index.scss';

  .search-message {
    h2 {
      margin: 16px;
      color: $gray;
    }
  }

  @media screen and (max-width: 545px) {
    .search-message {
        h2 {
          font-size: 18px;
        }
      }
  } 

</style>