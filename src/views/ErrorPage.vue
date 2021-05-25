<template>
  <section class="error-page">

  <img src="../assets/iconfinder_sad_322493.png" alt="sad face">
  <h4>404</h4>
  <p>Page not found, to return home click here:</p>
  <router-link to="/home" >Home</router-link>
  </section>
</template>

<script>
export default {
  name: 'ErrorPage'
}
</script>

<style lang="scss" scoped>
@import '../index.scss';
.error-page {
  padding-bottom: 10%;
  background-color: $gray;
  a {
    color: $darkestRed
  }
}
</style>