<template>
    <section class="service-container">
        <button class="service-btn">{{ provider.name }}</button>
        <img :src="provider.logo" :alt="provider.name + 'logo'">
    </section>
</template>

<script>

export default {
    name: 'Service',
    props: {
        provider: {type: Object}
    }
}
</script>

<style scoped  lang="scss">
  @import '../index.scss';
    
    .service-container {
        @include flex-row; 
        border: solid 1px $mediumRed; 
        box-shadow: 0 0 .5em $mediumRed;
        height: 50px; 
        margin: 5px; 
    }

    .service-btn {
        color: $gray; 
        /* font-size: 1.5em;  */
        font-weight: bold; 
    }

</style>
