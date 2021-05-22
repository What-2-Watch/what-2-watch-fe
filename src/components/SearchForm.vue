<template>
  <form class="search-form">
    <input type="text" placeholder="Search" v-model="searchInput">
    <article class="secondary-inputs">
    <select name="genres" v-model="genreInput">
      <option disabled>Genre:</option>
      <option v-for="genre in genres" 
      value="genre.id" :key="genre.id">
       {{genre.name}}    
      </option>
    </select>
    <select name="regions" v-model="regionInput">
      <option disabled>Region:</option>
      <option v-for="region in regions" 
      value="region.id" :key="region.id">
       {{region.en_name}}    
      </option>
    </select>
    </article>
    <button type="submit" v-on:click="searchMovies">Submit Search</button>
  </form>
</template>

<script>

export default {
  name: 'SearchForm',
  data() {
    return {
      searchInput: '',
      genreInput: 'Genre:',
      languageInput: 'en-US',
      regionInput: 'Region:',
    }
  },
  props: {
    genres: Array,
    languages: Array,
    regions: Array
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
</style>