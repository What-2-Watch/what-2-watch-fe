<template>
  <section class="profile-view">
    <Profile :user="user"/>
  </section>
</template>

<script>
import Profile from '../components/Profile'; 
import { getUserById, getUserId } from '../utilities';

export default ({
 name: 'ProfilePage',
 data() {
   return {
     user: {}
   }
 },
 components: {
   Profile
 },
 props: {
   userId: Number
 },
mounted() { 
    getUserById(getUserId())
    .then(data => this.user = data)
 }
})
</script>

<style scoped  lang="scss">
  @import '../index.scss';

</style>