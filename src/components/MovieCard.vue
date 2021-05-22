<template>
  <article class="movie-card">
    <router-link to="/movieDetailTest" >
     <img v-if="!movie.poster.includes('null')" :src="movie.poster" alt="" class="poster"/>
     <div v-else class="poster-error">
      <h3>{{ movie.title }}</h3>
      <p class="error">Poster not available</p>
    </div>
    </router-link>
        <aside class="movie-card-details">
            <div class="button-container">
              <div class="thumbs">
                <button name="upVote" v-on:click="emitThumbs">👍</button>
                <button name="downVote" v-on:click="emitThumbs">👎</button>
              </div>
              <button name="add" v-on:click="emitWatchlist" v-if="list !== 'My Watchlist'">Add to Watchlist</button>
              <button v-else name="remove" v-on:click="emitWatchlist">Remove from Watchlist</button>
            </div>
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
      width:50%; 
      margin: 0 auto;
      padding: 50px 20px 50px 20x; 
      font-size: 26px;

      .error {
        width: 50%;
        text-align: center;
      }
    }

    .movie-card-details {
  
      display:flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      text-align:center;

      h3 {
        font-size: 20px;
        font-weight: 400;
        text-align: left;
        margin: 0 auto;
        color:$gray;
        text-align: center;
      }
    }

  .thumbs {
    justify-content: space-between;
    button {
          margin: 0 10px 0 10px;
    }
  }

  .button-container{
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;

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