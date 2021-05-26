<template>
  <form class="search-form" @submit.prevent="searchMovies">
    <input type="text" placeholder="Search" v-model="searchInput" id="search" required />
  <label for="search">
    <button>Submit Search</button>

  </label>
  </form>
</template>

<script>

export default {
  name: 'SearchForm',
  data() {
    return {
      searchInput: '',
      languageInput: 'en-US',
      regionInput: 'Region:',
    }
  },
  methods: {
    searchMovies(e) {
      e.preventDefault()
      const searchInputs = {
        lang: 'en-US',
        region: this.regionInput,
        search: this.searchInput
      }
      this.$emit('submitSearch', searchInputs)
      this.submitGenre()
    },
    submitGenre() {
      this.$emit('changeGenreFilter', this.genreInput)
    }
  }
}
</script>

<style lang="scss">
  @import '../index.scss';

  .search-form {
    margin: 35px;
    padding: 50px;
    @include primaryBorder;

    input {
      background-color: transparent;
      border-bottom: 1px solid $lightRed;
      width: 60%;
      font-size: 2em;
      color: $gray
    }

    button, select {
      color: $gray;
      border: 1px solid $lightRed;
      padding: 5px;
      background-color: transparent;
      border-radius: 5px;
      font-size: 1.5em;
      margin: 15px;
    }
    select {
      width: 50%;
    }
  }

  .secondary-inputs {
    margin-top: 15px;
    display: flex;
    justify-content: center;
  }

@media screen and (max-width: 600px) {

  .search-form {
    padding: 20px; 
    font-size: 15px; 
    input {
      width: 90%
    }
    select {
      width: 60%;
    }
  }

  .secondary-inputs {
    width: 100%; 
  }

}

</style>