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
import { postService, removeSubscription, getUserId } from '../utilities.js'

export default {
    name: 'Service',
    props: {
        provider:Object,
    },
    data() {
        return{
            active: false,
            subId: null,
        }
    },
    mounted() {
        //pull local storage
        //check if MY service id is inside of the array
        //if so, save the subID and change active to true
    },
    methods: {
        clickProvider() {
            console.log(this.provider.name, this.provider.id)
            if (this.active !== true) {
            this.active = true
            this.addSubscription({name: this.provider.name, api_provider_id: this.provider.id})
        } else {
            this.active = false
            removeSubscription(this.subId)
            //find in local storage using id, remove it
         }
        },
        addSubscription(service) {
            service.user = getUserId()
            postService(service)
            .then(response => {
                console.log(response)
                this.subId = response.id
                //save reponse to local storage
            } )
        },
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
