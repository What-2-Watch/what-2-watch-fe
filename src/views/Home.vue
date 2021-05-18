<template>
  <section class="home-view">
    <Gallery />
  </section>
</template>

<script>
import Gallery from '../components/Gallery';

export default {
  name: 'Home',
  components: {
    Gallery
  }
}
</script>

<style scoped lang="scss">
@import '../index.scss';
  .home-view {
    background-color: $darkestRed;
  }

</style>
