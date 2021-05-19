<template>
  <section class="profile-view">
    <Profile :user="user"/>
  </section>
</template>

<script>
import Profile from '../components/Profile'; 

export default ({
 name: 'ProfilePage',
 components: {
   Profile
 }
})
</script>

<style scoped  lang="scss">
  @import '../index.scss';

</style>