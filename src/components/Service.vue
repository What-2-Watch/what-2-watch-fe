<template>
        <img 
        v-on:click="addProvider"
        :src="provider.logo" 
        class="service-logo" 
        :alt="provider.name + 'logo'"
        id="provider.id"
        name="provider.name"
        :class="{active: is_active}">
        <div v-if=active>{{provider.name}}</div>
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
        addProvider() {
            console.log(this.provider.name, this.provider.id)
            this.active = true;
            this.$emit('addProvider', {name: this.provider.name, api_provider_id: this.provider.id})
        }
    }
}
</script>

<style scoped  lang="scss">
  @import '../index.scss';
    
    .service-container {
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

    .is_active {
        border: solid 2px $mediumRed;
    }


    .service-btn {
        color: $gray; 
        /* font-size: 1.5em;  */
        font-weight: bold; 
    }

</style>
