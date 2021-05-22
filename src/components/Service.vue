<template>
        <img 
        v-on:click="clickProvider"
        :src="provider.logo" 
        class="service-logo" 
        :alt="provider.name + 'logo'"
        id="provider.id"
        name="provider.name"
        :class="active ? 'is-active' : 'not-active'"
        />
</template>

<script>

export default {
    name: 'Service',
    props: {
        provider: {type: Object}
    },
    data() {
        return{
            active: false
        }
    },
    methods: {
        clickProvider() {
            console.log(this.provider.name, this.provider.id)
            this.active = true
            this.$emit('addProvider', {name: this.provider.name, api_provider_id: this.provider.id})
        }
    }
}
</script>

<style scoped  lang="scss">
  @import '../index.scss';
    
    .service-logo {
        width: 85px;
        height: 85px; 
        border-radius: 20%;
    }

    .is-active {
        border: solid 5px $mediumRed;
    }

    .not-active {
        border: solid 5px transparent;
    }

</style>
