<template>
    <div>
        <h3 class="text-center text-4xl py-3 font-semibold">Our Banners</h3>
        <div class="sm-banner flex flex-wrap justify-center items-center">
            <stage-banner v-for="(key,i) in Object.keys(banner.items)" :key="i" :item="banner.items[key]"></stage-banner>
            <router-link v-if="banner.right.active" :to="banner.right.url">
                <div class="banner-box flex flex-col justify-center items-center text-center m-5" :style="`background-image: url(${banner.right.image ? banner.right.image.src: $store.state.defaults.sideBanner});`">
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                banner: this.$settings.sections.banner,
            }
        }
    }
</script>

<style lang="css" scoped>


.banner-box{
        min-width: 300px;
        height: 50vh;
        background-size: cover;
        background-position: center;
        transition: .4s ease-in-out;
    }

    .banner-box:hover{
        transform: scale(1.01);
        overflow: hidden;
    }

    button{
        transition: .4s ease-in-out;
    }

    .banner-box:hover button{
        --tw-bg-opacity: 1;
        background-color: rgba(16, 185, 129, var(--tw-bg-opacity));
        border: 0px;
    }

</style>