<template>
    <section class="profile-container">
        <div class="welcome-container">
            <h1>Welcome, {{ user.first_name }}</h1>
            <h2 class="email">Email: {{ user.email }}</h2>
        </div>
        <Gallery 
            :listTitle="'YOUR WATCHLIST'"
            :list="watchlist"
            v-on:displayMovieModal="displayMovie($event)"/>
        <modal :movie="shownMovie" :showing="displayed"
            v-on:closeModal="displayMovie($event)"
            v-on:postThumb="updateThumb($event)"
            v-on:postWatchList="updateWatchList($event)"></modal>
        <h2>Click below to update your services.</h2>
        <article class="subscriptions-container"> 
          <section :key="service.id" v-for="service in services">
            <Service 
             :provider="service" 
             :location="location"
             v-on:addProvider="postService($event)"
            />
          </section>
        </article>
    </section>
</template>

<script>
import Service from './Service'; 
import Gallery from '../components/Gallery';
import Modal from '../components/Modal'
import { getServices, getUserId, filterByTopServices, getUserById, getMovieById, cleanMovieSearchData } from '../utilities';


export default {
    name: 'Profile',
    components: {
        Service,
        Gallery, 
        Modal
    }, 
    data() {
        return {
            services: [],
            user: {},
            watchlist : [],
            displayed: false,
            location: 'profile',
            shownMovie: {}
        }
    },
    mounted() {
        getServices()
        .then(services => {
        this.services = filterByTopServices(services)
        getUserById(getUserId())
        .then(response => {
            this.user = response
            this.fetchWatchlistMovies()
        })
    })
  },
  methods: {
      displayMovie(movie) {
      if (this.displayed !== true && this.shownMovie !== movie) {
        this.shownMovie = movie;
        this.displayed = true;
      }
      else {
        this.shownMovie = {},
        this.displayed = false
      }
    },
     fetchWatchlistMovies() {
      let movieList = this.user.watchlist.map(watchlistObj => {
        return getMovieById(watchlistObj.api_movie_id)
      })
      Promise.all(movieList)
      .then(responses => {
        this.watchlist = [...cleanMovieSearchData(responses)]
      })
    }
  }
}
</script>

<style scoped  lang="scss">
  @import '../index.scss';

    .profile-container {
        color: $gray;
        padding: 50px; 
        margin: 35px; 
        min-height: 550px;
        @include primaryBorder;
    }

    .lang-reg-container {
        @include flex-row; 
        margin-bottom: 20px; 
    }

    .welcome-container {
        border-bottom: 1px solid $gray; 
        margin: 0 10px 20px 10px; 
    }

    .email {
        font-size: 17px;
        margin: 0 10px 20px 10px; 
    }

    .edit-btn {
        background-color: transparent;
        border-bottom: 1px solid $gray; 
        color: $gray; 
        width: 100px;
        height: 25px; 
        margin: 40px; 
        float: left;  
    }

    .subscriptions-container {
       @include serviceContainer(4);
    }

    .subscriptions-container::-webkit-scrollbar {
       @include serviceScroll
    }

    .subscriptions-container::-webkit-scrollbar-thumb {
      @include serviceScrollThumb
    }


@media screen and (max-width: 600px) {
    
    .profile-container {
        padding: 10px; 
        margin: 15px; 
    }

    .subscriptions-container {
        @include serviceContainer(3);
    }

  }


</style>