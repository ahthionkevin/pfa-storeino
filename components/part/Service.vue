<template>
    <div class="service py-4">
        <h4 class="text-3xl font-bold text-center py-5">Nos Services</h4>
        <div class="flex flex-wrap justify-around  py-4 align-middle">
            <div v-for="(item, i) in items" :key="i" class="p-2">
                <div class="flex flex-col">
                    <nuxt-link :to="item.url" class="text-center">
                        <img class="text-blue-700" width="120" height="200" :src="item.image ? item.image.src : null" :alt="item.text" />
                        <b class="p-2">{{ item.text }}</b>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                 items: [
                        {
                            image: { src: require('assets/pay/noun-express.svg') },
                            text: this.$settings.sections.services.items.delivery.text,
                            url: this.$settings.sections.services.items.delivery.url,
                        },
                        {
                            image: { src: require('assets/pay/noun-satisfaction.svg') },
                            text: this.$settings.sections.services.items.satisfaction.text,
                            url: this.$settings.sections.services.items.satisfaction.url,
                        },
                        {
                            image: { src: require('assets/pay/noun-quality.svg') },
                            text: this.$settings.sections.services.items.quality.text,
                            url: this.$settings.sections.services.items.quality.url,
                        }
                    ]
            }
        }
    }
</script>

<style lang="css" scoped>
    .service{
        height: 380px;
        background-color: #FDFAED;
    }

</style>