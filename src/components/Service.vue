<template>
    <button v-on:click="clickProvider">
        <img 
        :src="provider.logo" 
        class="service-logo" 
        :alt="provider.name + 'logo'"
        id="provider.id"
        name="provider.name"
        :class="active ? 'is-active' : 'not-active'"
        />
    </button>
</template>

<script>
import { getUserById, postService, removeSubscription, getUserId, } from '../utilities.js'

export default {
    name: 'Service',
    props: {
        provider:Object,
        location:String
    },
    data() {
        return{
            active: false,
            subId: null,
        }
    },
    mounted() {
        if(this.location === "profile") {
            this.checkForSubscription(this.provider.id);
        }
    },
    methods: {
        clickProvider() {
            if (this.active !== true) {
            this.active = true
            this.addSubscription({name: this.provider.name, api_provider_id: this.provider.id})
        } else {
            this.active = false
            removeSubscription(this.subId)
         }
        },
        addSubscription(service) {
            service.user = getUserId()
            postService(service)
            .then(response => {
                this.subId = response.id
            } )
        },
        async checkForSubscription(id) {
            let userSubs = [];
            await getUserById(getUserId())
            .then(response => {
                userSubs = response.subscriptions
                this.checkActive(userSubs, id)
            })
            
        },
        checkActive(userSubs, id) {
            userSubs.forEach(sub => {
                if (id === sub.api_provider_id) {
                    this.active = true;
                    this.subId = sub.id
                }   
            })
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
        border: solid 5px $lightRed;
        box-shadow: 0 0 .75em $lightRed;
    }

    .not-active {
        border: solid 5px transparent;
    }

</style>
