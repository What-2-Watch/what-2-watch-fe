<template>
  <section class="home-view">
    <Gallery />
    <Gallery :listTitle="watchlist_title"/>
    <h2>{{ user.email }}</h2>
  </section>
</template>

<script>
import Gallery from '../components/Gallery';

export default {
  name: 'Home',
  components: {
    Gallery
  },
  data() {
    return {
      'watchlist_title':"My Watchlist"
    }
  },
  props: {
    user: {type: Object}
  }
}
</script>
<style scoped lang="scss">
@import '../index.scss';
  .home-view {
 
  }

</style>
