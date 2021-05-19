<template>
    <router-link to="/movieDetailTest" class="movie-card">
     <img :src="movie.src" alt="" class="poster"/>
        <aside class="movie-card-details">
            <h3>{{ movie.title }}</h3>
            <div class="button-container">
              <div class="thumbs">
                <button name="upVote" v-on:click="emitActivity">👍</button>
                <button name="downVote" v-on:click="emitActivity">👎</button>
              </div>
              <button name="add" v-on:click="emitActivity" v-if="list !== 'My Watchlist'">Add to Watchlist</button>
              <button v-else name="remove" v-on:click="emitActivity">Remove from Watchlist</button>
            </div>
        </aside>
    </router-link>
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
          emitActivity(e) {
            this.$emit(e.target.name, this.movie.id)
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
      // grid-template-area: bottom;
      transition: all 0.2s ease-in-out;
      z-index: 0;
      margin-bottom: 25px;

        img {
          height: 250px;  
          margin: 20px; 
          border-radius: 2px;
          border: solid .1px #d9d9d956; 
          box-shadow: 0 0 .75em #808080;
          // grid-area: ;
        }

        &:hover {
          @include transition;
          border: solid 3px $darkestRed;
        }

        &:hover .poster {
          transform: scale(1.01);
        }
    }
    .card-info {
      display:flex;
      flex-direction: column-reverse;
      opacity: 0;
      height: 100%;
      width: 100%;
      position: absolute;
      padding: 8px;

      h3 {
        font-size: 24px;
        font-weight: 400;
        text-align: left;
        margin-left: 15px;
        margin-bottom: -6;
      }
    }

  .thumbs {

    justify-content: space-between;
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