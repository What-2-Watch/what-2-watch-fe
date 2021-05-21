<template>
  <article class="movie-card">
    <router-link to="/movieDetailTest" >
     <img v-if="!movie.poster.includes('null')" :src="movie.poster" alt="" class="poster"/>
     <p v-else class="poster-error">Poster not available</p>
    </router-link>
        <aside class="movie-card-details">
            <h3>{{ movie.title }}</h3>
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
      right: 0;
      position: relative;
      overflow: hidden;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(1, 1fr);
      transition: all 0.2s ease-in-out;
      z-index: 0;

        img {
          height: 250px;  
          margin: 20px; 
          border-radius: 2px;
          border: solid .1px #d9d9d956; 
          box-shadow: 0 0 .75em #808080;
        }

        &:hover {
          border: solid 3px $darkestRed;
        }
    }

    .poster-error {
      height: 250px;  
      width:100%;
      margin: 20px;
      padding: 50px 20px 50px 20x; 
      font-size: 26px;
      border: solid .1px #d9d9d956; 
      box-shadow: 0 0 .75em #808080;
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
        margin-left: 15px;
        margin-bottom: -6;
        color:$gray;
      }
    }

  .thumbs {
    justify-content: space-between;
    button {
          margin: 5px;
    }
  }

  .button-container{
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    button {
       color: $gray;
       font-size: 14px;
    }
  }

  a:hover, a:visited, a:link, a:active {
      text-decoration: none;
      color: $gray;
  }

</style>