<template>
  <article class="movie-card">
    <router-link to="/movieDetailTest" >
     <img v-if="!movie.poster.includes('null')" :src="movie.poster" alt="" class="poster"/>
     <div v-else class="poster-error">
      <h3>{{ movie.title }}</h3>
      <p class="error">Poster not available</p>
    </div>
    </router-link>
      <aside class="button-container">
        <div class="thumbs">
          <button name="upVote" v-on:click="emitThumbs">👍</button>
          <button name="downVote" v-on:click="emitThumbs">👎</button>
        </div>
        <button name="add" v-on:click="emitWatchlist" v-if="list !== 'My Watchlist'">Add to Watchlist</button>
        <button v-else name="remove" v-on:click="emitWatchlist">Remove from Watchlist</button>
      </aside>
    </article>
</template>


<script>
    export default {
        name: 'MovieCard', 
        props: {
          movie: {type: Object},
          list: {type: String}
        }, 
        emits: [
            'upVote:movie.id',
            'downVote:movie.id',
            'add:movie.id',
            'remove:movie.id'
        ],
        methods: {
          emitThumbs(e) {
            this.$emit(e.target.name, {id: this.movie.id, title: this.movie.title})
          },
          emitWatchlist(e) {
            console.log(this.movie)
            this.$emit(e.target.name, {id: this.movie.id, title: this.movie.title})
          }
        }
    }
</script>

<style lang="scss">
  @import '../index.scss';
    .movie-card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      top: 0;
      background-color: $darkestRed;
      box-shadow: 0 0 .35em #d9d9d956;

        img {
          width: 100%;
          margin: 0 auto;
          border-radius: 1px;
        }
    }

    .poster-error {
      width:100%; 
      margin: 0 auto;
      padding: 15px 0 0 0;
      font-size: 24px;

      .error {
        width: 70%;
        margin: 0 auto;
        padding: 40px 0 0 0;
        text-align: center;
      }

      h3 {
        font-size: 30px;
        text-align: center;
        margin: 0 auto;
        color:$gray;
        text-align: center;
      }
    }

  .thumbs {
    align-self: flex-end;
    justify-content: space-between;
    button {
          margin: 0 10px 0 10px;
    }
  }

  .button-container{
    width: 100%;
    margin: 0 auto;
    padding: 0 10px 0 0;
    display: flex;
    justify-content: space-between;
    align-self: flex-end;

    button {
       color: $gray;
       font-size: 14px;
      //  border: solid .1px $lightRed
    }
  }

  a:hover, a:visited, a:link, a:active {
      text-decoration: none;
      color: $gray;
  }

</style>