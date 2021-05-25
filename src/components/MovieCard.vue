<template>
  <div class="card-container">

  <button class="movie-card" >
     <img v-if="!movie.poster.includes('null')" :src="movie.poster" alt="" class="poster" v-on:click="clickMovie"/>
     <div v-else class="poster-error">
      <img src="../assets/missing_movie-01.png" alt="A blank poster"/>
      <h3>{{ movie.title }}</h3>
      <p class="error">Poster not available</p>
    </div>
    </button>
      <aside class="button-container">
        <div class="thumbs">
            <img role="button" tab-index="0" :class="liked ? 'is-active' : 'not-active'" src="../assets/thumbs-up.png" class="thumb" name="upVote" v-on:click="emitThumbs"/>
            <img role="button" tab-index="0" :class="disliked ? 'is-active' : 'not-active'" src="../assets/thumbs-down.png" class="thumb" name="downVote" v-on:click="emitThumbs"/>
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
                this.updateThumb({api_movie_id: this.movie.id, up: false, title: this.movie.title});

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
            else if (!currentMovie && thumbs) {
              this.thumbId = null
              this.disliked = false;
              this.liked = false
            } else if (!currentMovie && !thumbs) {
              this.onList = false;
              this.listId = false
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
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      width:100%; 
      margin: 0 auto;
      padding: 2px;

        img {
          grid-area:1/1/1/1;
          width: 100%;
          margin: 0 auto;
        }

      .error {
        width: 70%;
        grid-area:1/1/1/1;
        margin: 0 auto;
        padding: 100px 0 0 0;
        text-align: center;
        color:$gray;
        font-size: 15px;
      }

      h3 {
        font-size: 18px;
        grid-area:1/1/1/1;
        grid-area:'error';
        text-align: center;
        margin: 0 auto;
        padding: 10px 0 0 0;
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
    padding-bottom: 10px;
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
       height: 25px;
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

@media screen and (max-width: 600px) {
    .poster-error {
      h3 {
        font-size: 28px;
        padding: 15px 0 0 0;
      }
      .error {
        padding: 160px 0 0 0;
        font-size: 28px;
      }
    }
  }

  @media screen and (max-width: 400px) {
    .poster-error {
      h3 {
        font-size: 22px;
        padding: 15px 0 0 0;
      }
      .error {
        padding: 120px 0 0 0;
        font-size: 18px;
      }
    }
  }

</style>