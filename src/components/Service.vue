<template>
    <!-- <section class="service-container"> -->
        <!-- <button class="service-btn">{{ provider.name }}</button> -->
        <img 
        v-on:click="addProvider"
        :src="provider.logo" 
        class="service-logo" 
        :alt="provider.name + 'logo'"
        id="provider.id"
        name="provider.name">
    <!-- </section> -->
</template>

<script>

export default {
    name: 'Service',
    props: {
        provider: {type: Object}
    },
    methods: {
        addProvider() {
            console.log(this.provider.name, this.provider.id)
            this.$emit('addProvider', {name: this.provider.name, api_provider_id: this.provider.id})
        }
    }
}
</script>

<style scoped  lang="scss">
  @import '../index.scss';
    
    .service-container {
        // @include flex-row; 
        // border: solid 1px $mediumRed; 
        // box-shadow: 0 0 .5em $mediumRed;
        /* width: 70px;  */
        margin: 5px; 

        img {
            width: 100%;
        }
    }

    .service-logo {
        width: 75px;
        height: 75px; 
        border-radius: 20%;

    }

    .service-btn {
        color: $gray; 
        /* font-size: 1.5em;  */
        font-weight: bold; 
    }

</style>
