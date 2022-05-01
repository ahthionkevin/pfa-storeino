<template>
    <div class="section-m1 flex flex-wrap justify-around py-16">
        <div class="col">
            <!-- <img :src="logo ? logo.src : $store.state.defaults.logo" alt="Store logo" class="w-36 pb-3"> -->
            <h4>Get in Touch</h4>
            <!-- <p><strong>Adress</strong> 562 Washington Road</p>
            <p><strong>Phone</strong> +212 561 234 6789</p>
            <p><strong>Hours</strong> 09h00 - 10h00</p> -->

            <p><i class="fa-solid fa-clock"></i> Mon.-Sat.: 09h00-10h00</p>
            <p><i class="fa-solid fa-location-pin"></i> 562 Washington Road</p>
            <p><i class="fa-solid fa-phone-flip"></i> +212 561 234 6789</p>
            <p><i class="fa-solid fa-envelope"></i> me@example.com</p>
            
            <div class="follow pt-3">
                <h4>{{ $settings.sections.footer.social_media.title }}</h4>
                <div class="icon">
                    <a v-for="item in socialMedia.filter(s=>$settings.sections.footer.social_media[s.name])" :key="item.name" :href="$settings.sections.footer.social_media[item.name]" class="px-1" target="_blank" rel="noopener noreferrer">
                        <i :class="`${item.icone} ${item.hover}`"></i>
                    </a>
                </div>
            </div>
        </div>

        <div class="col flex-col flex flex-wrap max-w-md">
            <h4>About</h4>
            <div v-html="$settings.sections.footer.about" class="text-justify"></div>
        </div>

        <div v-if="menu" class="col flex-col flex flex-wrap">
            <h4>Menu</h4>
            <router-link :to="item.url" v-for="(item,i) in menu.items" :key="i">{{item.text}}</router-link>
        </div>

        <div class="col install flex-col flex flex-wrap">
            <h4>Install App</h4>
            <p>From apple Store or Google Play</p>
            <div class="row flex flex-wrap flex-row justify-between items-center">
                <img width="125px" src="~assets/pay/appStore.png" class="rounded-lg mr-3" alt="">
                <img width="150px" src="~assets/pay/google.png" class="rounded-lg mr-3" alt="">
            </div>
            <p>{{ $settings.sections.footer.methods.title }}</p>
            <div class="row flex flex-wrap flex-row justify-evenly">
                <img width="60px" v-for="item in methods.filter(m=>$settings.sections.footer.methods[m.name])" :key="item.name" :src="require(`~/assets/pay/${item.image}`)" :alt="item.name"/>
            </div>
        </div>
        <!-- <div class="copyright">
            <p>&copy; 2022 Storeino Made by Soufaine and Kevin </p>
        </div> -->
    </div>
</template>

<script>
    export default {
        data(){
            return{
                logo: this.$settings.sections.header.logo,
                menu: this.$settings.sections.footer.menu,
                methods: [
                    {
                        name: 'visa',
                        image: 'visa.PNG'
                    },
                    {
                        name: 'mastercard',
                        image: 'mastercard.PNG'
                    },
                    {
                        name: 'transfer',
                        image: 'bankTransfert.PNG'
                    },
                    {
                        name: 'cash',
                        image: 'cashOnDelivery.PNG'
                    }
                ],

                socialMedia: [
                    {
                        name: 'facebook',
                        image: 'https://storeno.b-cdn.net/themes/palest/facebook.png',
                        icone: 'fab fa-facebook-f fa-xl',
                        color: 'text-blue-600'
                    },
                    {
                        name: 'twitter',
                        image: 'https://storeno.b-cdn.net/themes/palest/twitter.png',
                        icone: 'fab fa-twitter fa-xl',
                        color: 'text-blue-300',
                        hover: `hover:${this.color}`
                    },
                    {
                        name: 'instagram',
                        image: 'https://storeno.b-cdn.net/themes/palest/instagram.png',
                        icone: 'fab fa-instagram fa-xl',
                        color: '',
                        hover: `hover:${this.color}`
                    },
                    {
                        name: 'youtube',
                        image: 'https://storeno.b-cdn.net/themes/palest/youtube.png',
                        icone: 'fab fa-youtube fa-xl',
                        color: 'text-red-600',
                        hover: `hover:${this.color}`
                    },
                    {
                        name: 'whatsapp',
                        image: 'https://storeno.b-cdn.net/themes/palest/whatsapp.png',
                        icone: 'fab fa-whatsapp fa-xl',
                        color: 'text-green-400',
                        hover: `hover:${this.color}`
                    },
                    {
                        name: 'linkedin',
                        image: 'https://storeno.b-cdn.net/themes/palest/linkedin.png',
                        icone: 'fab fa-linkedin fa-xl',
                        color: 'text-blue-800',
                        hover: `hover:${this.color}`
                    },
                    {
                        name: 'snapchat',
                        image: 'https://storeno.b-cdn.net/themes/palest/snapchat.png',
                        icone: 'fab fa-snapchat fa-xl',
                        color: '',
                        hover: `hover:${this.color}`
                    },
                    {
                        name: 'tiktok',
                        image: 'https://storeno.b-cdn.net/themes/palest/tiktok.png',
                        icone: 'fab fa-tiktok fa-xl',
                        color: '',
                        hover: `hover:${this.color}`
                    }
                ]
            }
        }
        
    }
</script>

<style lang="css" scoped>
    .section-m1{
        background-color: #2a2a2a;
        color: #AEAEAE;
    }
    h4{
        font-size: 1.5rem;
        font-weight: 600;
        padding-bottom: 10px;
        color: #fff;
        border-bottom: #F2002D 4px solid;
        margin-bottom: 17px;
    }

    p{
        font-size: 1rem;
        padding-bottom: 5px;
        padding-top: 5px;
    }
    i{
        transition: .3s ease-in-out;
    }
</style>