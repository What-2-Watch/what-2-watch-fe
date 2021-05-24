<template>
  <div class="card-container">

  <article class="movie-card" >
     <img v-if="!movie.poster.includes('null')" :src="movie.poster" alt="" class="poster" v-on:click="clickMovie"/>
     <div v-else class="poster-error">
      <h3>{{ movie.title }}</h3>
      <p class="error">Poster not available</p>
    </div>
    </article>
      <aside class="button-container">
        <div class="thumbs">
          <img :class="liked ? 'is-active' : 'not-active'" src="../assets/thumbs-up.png" class="thumb" name="upVote" v-on:click="emitThumbs"/>
          <img :class="disliked ? 'is-active' : 'not-active'" src="../assets/thumbs-down.png" class="thumb" name="downVote" v-on:click="emitThumbs"/>
        </div>
          <button name="add" v-on:click="emitWatchlist(true)" v-if="!onList">✚ Watchlist</button>
          <button v-else name="remove" v-on:click="emitWatchlist(false)">ⓧ Watchlist</button>
      </aside>
  </div>
    
</template>

<script>
import { getUserById, getUserId, postThumb, postWatchlist, removeThumb, removeWatchlist } from '../utilities'

    export default {
        name: 'MovieCard', 
        props: {
          movie: {type: Object},
          list: {type: String}
        }, 
        data() {
          return {
            liked: false,
            disliked: false,
            thumbId: null,
            onList: false
          }
        },
        emits: [
            'upVote:movie.id',
            'downVote:movie.id',
            'add:movie.id',
            'remove:movie.id',
            'clickMovie:movie'
        ],
        mounted() {
          this.checkUserLists()
        },
        methods: {
          
          emitThumbs(e) {
            if (e.target.name === 'upVote') {
              if (!this.liked) {
                this.updateThumb({api_movie_id: this.movie.id, up: true, title: this.movie.title});
                this.liked = true;
              } else if (this.thumbId && this.liked) {
                this.liked = false;
                removeThumb(this.thumbId)
              }
            } else if (!this.disliked) {
                this.disliked = true
                this.updateThumb({api_movie_id: this.movie.id, up: true, title: this.movie.title});

            } else if (this.disliked) {
                this.disliked = false;
                removeThumb(this.thumbId)
            }
          },
          emitWatchlist(posting) {
            if (posting) {
              this.onList = true
              this.updateWatchList({api_movie_id: this.movie.id, title: this.movie.title})
            } else {
              this.onList = false
              removeWatchlist(this.listId)
            }
          },
          clickMovie() {
            this.$emit('clickMovie', this.movie)
          },
          checkUserLists() {
            let userThumbs = [];
            getUserById(getUserId())
            .then(response => {
                userThumbs = response.thumbs
                this.checkActive(userThumbs, this.movie.id, true)
                this.checkActive(response.watchlist, this.movie.id)
            })
            
          },
          checkActive(userList, id, thumbs = false) {
            const currentMovie = userList.find(listItem => id === listItem.api_movie_id)
            if (currentMovie && thumbs) {
              this.checkCardThumbs(currentMovie, id)
            } else if (currentMovie) {
              this.checkCardWatchlist(currentMovie, id)
            } 
            else if (!currentMovie) {
              this.thumbId = null
              this.disliked = false;
              this.liked = false
            }
          },
          checkCardThumbs(thumb, id) {
            if (id === thumb.api_movie_id && thumb.up) {
              this.liked = true;
              this.thumbId = thumb.id
            } else if (id === thumb.api_movie_id && !thumb.up) {
              this.disliked = true;
              this.thumbId = thumb.id
            }
          },
          updateThumb(thumb) {
            postThumb(thumb, getUserId())
            .then(res => this.thumbId = res.id)
          },
          updateWatchList(obj) {
            obj.user = getUserId()
            postWatchlist(obj)
            .then(res => this.listId = res.id)
          },
          checkCardWatchlist(watchlist, id) {
            if (id === watchlist.api_movie_id) {
              this.onList = true;
              this.listId = watchlist.id
            }
          }
    }
  }
</script>

<style lang="scss">
  @import '../index.scss';
    .movie-card {
      display: flex;
      width: 100%;
      top: 0;
      background-color: $darkestRed;
      box-shadow: 0 0 .35em #d9d9d956;

        img {
          width: 100%;
          margin: 0 auto;
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
        color:$gray;
      }

      h3 {
        font-size: 30px;
        text-align: center;
        margin: 0 auto;
        color: $gray;
        text-align: center;
      }
    }

  .thumbs {
    display: flex;
    justify-content: space-between;
  }

  .thumb {
    color: $black;
    border: 2px solid $gray;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    margin: 5px;
    cursor: pointer;
}

  .button-container {
    width: 100%;
    box-shadow: 0 0 .35em #d9d9d956;
    padding-top: 5px;
    align-self: flex-end;
    background-color: $darkestRed;
    display: flex;
    flex-direction: column;

    button {
       color: $darkestRed;
       font-size: 14px;
       align-self: center;
       border: 1px solid $gray;
       padding: 5px;
       border-radius: 5px;
       width: 90%;
       background-color: $gray;
    }
  }

  a:hover, a:visited, a:link, a:active {
      text-decoration: none;
      color: $gray;
  }

  .is-active {
    background-color: $gray;
  }

</style>