
<template>
  <transition name="fade">
    <div class="modal" v-if="showing">
      <div class="modal__backdrop" @click="closeModal()"/>
      <div class="modal__dialog" v-bind:style="{ 'background-image': 'url(' + movie.backdrop + ')' }">
        <div class="modal__header">
          <slot name="header"/>
          <button type="button" class="modal__close" @click="closeModal()">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
              <path
                fill="currentColor"
                d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
              ></path>
            </svg>
          </button>
        </div>
        <section class="movie-info">
            <div class="title-box">
              <h2>{{ movie.title }}
              <p class="release-date">{{ movie.release_date.split('-')[0] }}</p>
              </h2>
              <p class="movie-rating">{{ movie.user_rating }}</p>
              </div>
            <article class="overview-box">
              <i>
                {{ movie.overview }}
              </i>
            </article>
            <aside class="button-box">
              <p name="add" v-on:click="emitWatchlist" v-if="list !== 'My Watchlist'">Add to Watchlist</p>
              <p v-else name="remove" v-on:click="emitWatchlist">Remove from Watchlist</p>
              <button class="thumb" name="upVote" v-on:click="emitThumbs">👍</button>
              <button class="thumb" name="downVote" v-on:click="emitThumbs">👎</button>
            </aside>
          </section>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      show: false
    };
  },
  props: {
    movie: Object,
    showing: Boolean
  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
      document.querySelector("body").classList.remove("overflow-hidden");
    },
    openModal() {
      console.log(this.movie.backdrop)
      this.$emit('openModal')
      document.querySelector("body").classList.add("overflow-hidden");
    },
    emitThumbs(e) {
      if (e.target.name === 'upVote') {
        this.$emit('postThumb', {api_movie_id: this.movie.id, title: this.movie.title, up: true});
      } else {
        this.$emit('postThumb', {api_movie_id: this.movie.id, title: this.movie.title, up: false});
      }
    },
    emitWatchlist() {
      this.$emit('postWatchList', {api_movie_id: this.movie.id, title: this.movie.title})
    },
  }
};
</script>


<style lang="scss" scoped>
@import "../index.scss";
.modal {
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  &__backdrop {
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
  &__dialog {
    background-color: #ffffff;
    position: relative;
    width: 90%;
    height: 90%;
    margin: 50px auto;
    display: flex;
    border-radius: 5px;
    z-index: 2;
    padding: 50px;
    overflow-y: hidden;
    svg {
      color: $gray;
      cursor: pointer
    }
    @media screen and (max-width: 992px) {
      width: 90%;
    }
  }
  &__close {
    width: 30px;
    height: 30px;
  }
  &__header {
    padding: 20px 20px 10px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  &__body {
    padding: 10px 20px 10px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  &__footer {
    padding: 10px 20px 20px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.detail-splash {
  background-size: contain;
  background-repeat: no-repeat;
}

.movie-info {
  background-color: rgba(75, 75, 75, 0.636);
  backdrop-filter: blur(10px);
  width: 250px;
  padding: 15px;
  border-radius: 10px;
  color: $gray;
  display: flex;
  flex-flow: column;
  height: fit-content;
  margin-top: 50px;
}

.movie-rating, .thumb {
border: 2px solid;
border-radius: 50%;
height: 50px;
width: 50px;
font-size: 1.8em;
padding: 3.5px;
color: $gray
}

.title-box {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.release-date {
  font-size: .6em;
}

.overview-box {
  padding-top: 30px;
  text-align: left;
  font-weight: 600;
}

.modal__close {
  float: left;
  border: 2px solid;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  padding: 2px 10px 0px 10px; 
  color: $gray;
  background-color: rgba(75, 75, 75, 0.636);
  backdrop-filter: blur(10px);
}

.button-box {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  color: $gray;
  button {
    font-size: 2em;
  }
}

.thumb {

}

  @media screen and (max-width: 600px) {

    .modal__close {
      height: 35px;
      width: 35px;
    }

    .modal {
      &__header {
        padding: 5px; 
      }
      &__dialog {
        padding: 10px; 
        overflow-y: scroll; 
      }
    }

  }
</style>