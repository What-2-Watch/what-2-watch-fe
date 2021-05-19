<template>
    <section class="sevice-container">
        <h2>{{ provider.sub }}</h2>
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
    }

</style>