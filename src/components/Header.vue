<template>
    <header>
        <div class="header-content">
            <router-link to="/home" exact-active-class="active-title">
            <h1>Flick Finder</h1>
            </router-link>
            <aside class="nav-links" v-if="loggedIn">
                <router-link to="/home"
                data-cy="home" class="nav-btn">Recommendations</router-link>
                <router-link to="/search"
                data-cy="search" class="nav-btn">Search</router-link>
                <router-link to="/profile"
                data-cy="profile" class="nav-btn">Profile</router-link>
            </aside>
        </div>
    </header>
</template>

<script>

export default {
    name: 'Header',
    props: {
        loggedIn: Boolean
     },
}
</script>

<style scoped lang="scss">
@import '../index.scss'; 
    header {
        height: 75px; 
        background-color: black; 
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-between;
        padding: 0 10px 0 10px;
        width: 100%;
        top: 0;
        vertical-align:bottom;
        border-bottom: solid $gray 6px;
    }
    h1 {
        margin-top: 15px;
        float: left;
    }
    .nav-links {
        align-self: flex-end;
        display: flex;
        justify-content: space-between;
        height: unset;
        a {
            font-family: 'Bebas Neue', cursive;
            letter-spacing: 2px;
            font-size: 17px;
            border: solid .1px transparent;
        }
    }
    
    .header-content {
        height: 50px;
        width: 100%;
        display: flex;
        justify-content: space-between;

        .active-title {
            background-color: transparent;
            border: none;
            color: black;
        }
    }
    .router-link-active {
        @include activeBorder;
  }

  .nav-btn {
      margin: 0 5px; 
  }

@media screen and (max-width: 600px) {
    
    header {
        height: 90px; 
    }

     .header-content {
         height: 28px; 
     }

      h1 {
          margin: 0; 
          font-size: 2em; 
      }

      .nav-links {
          @include centerColumn; 
      }

  }

@media screen and (max-width: 300px) {

      h1 {
          margin-top: 5px; 
          font-size: 1.75em; 
      }
  }
</style>