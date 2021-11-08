<template>
    <div class="container">
        <div class="flex flex-wrap p-2">
            <div class="w-full relative overflow-hidden" :class="banner.right.active ? 'md:w-3/4' : ''">
                <div class="flex flex-wrap h-full mx-2 slider-item inset-0" :class="'last'" v-if="lastItem">
                    <div class="image w-full md:w-2/3 relative">
                        <si-image width="600" height="300" class="h-48 bg-gray-200 md:h-full max-h-full object-cover" :src="lastItem.image ? lastItem.image.src: $store.state.defaults.sliderImage" :alt="lastItem.title"/>
                        <div class="flex absolute bottom-0 p-2">
                            <span v-for="(x,y) in Object.keys(banner.items)" :key="y" :class="y==activeIndex ?'bg-gray-200': ''" class="w-4 h-4 rounded-full bg-white mx-1 flex cursor-pointer" @click="activeIndex=y"></span>
                        </div>
                    </div>
                    <div class="text w-full md:w-1/3 bg-primary text-white">
                        <div class="p-2 flex flex-col justify-between h-full">
                            <h2 class="text-2xl mb-2">{{ lastItem.title }}</h2>
                            <p class="mb-2">{{ lastItem.description }}</p>
                            <router-link class="w-full bg-white text-primary flex p-2 justify-center" v-if="lastItem.button.active" :to="lastItem.button.url">{{ lastItem.button.text }}</router-link>
                        </div>
                    </div>
                </div>
                <template v-for="(key,i) in Object.keys(banner.items)">
                    <div class="flex flex-wrap h-full mx-2 slider-item relative" :class="i==activeIndex ? 'active': ''" :key="i">
                        <div class="image w-full md:w-2/3 relative">
                            <si-image width="100%" height="300" class="h-48 bg-gray-200 md:h-96 max-h-full object-cover" :src="banner.items[key].image ? banner.items[key].image.src : $store.state.defaults.sliderImage" :alt="banner.items[key].title"/>
                            <div class="flex absolute bottom-0 p-2">
                                <span v-for="(x,y) in Object.keys(banner.items)" :key="y" :class="y==activeIndex ?'bg-gray-200': ''" class="w-4 h-4 rounded-full bg-white mx-1 flex cursor-pointer" @click="animate(y)"></span>
                            </div>
                        </div>
                        <div class="text w-full md:w-1/3 bg-primary text-white">
                            <div class="p-2 flex flex-col justify-between h-full">
                                <h2 class="text-2xl mb-2">{{ banner.items[key].title }}</h2>
                                <p class="mb-2">{{ banner.items[key].description }}</p>
                                <router-link class="w-full bg-white text-primary flex p-2 justify-center" v-if="banner.items[key].button.active" :to="banner.items[key].button.url">{{ banner.items[key].button.text }}</router-link>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
            <div v-if="banner.right.active" class="w-full hidden md:block md:w-1/4 bg-gray-300">
                <div class="h-full">
                    <router-link :to="banner.right.url">
                        <si-image class=" object-cover h-full" width="300" height="500" :src="banner.right.image ? banner.right.image.src: $store.state.defaults.sideBanner" alt="Banner image"/>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            timeout: null,
            lastItem: null,
            activeIndex: 0,
            banner: this.$settings.sections.banner
        }
    },
    mounted() {
        this.animate();
    },
    methods: {
        animate(index=null){
            if(index != null){
                this.lastItem = this.banner.items[`item_${[this.activeIndex]}`];
                this.activeIndex = index;
                clearTimeout(this.timeout);
            }else{
                this.lastItem = this.banner.items[`item_${[this.activeIndex]}`];
                if(this.activeIndex >= Object.keys(this.banner.items).length-1) this.activeIndex = -1;
                this.activeIndex++;
                this.timeout = setTimeout(() => {
                    this.animate();
                    //this.$nuxt.error({ statusCode: 404, message: 'Okay' })
                }, 3500);
            }
        }
    },
}
</script>
<style>
    .slider-item.last{
        position: absolute;
    }
    .slider-item:not(.active):not(.last){
        position: absolute;
        top: 0;
        transform: translateX(-110%);
    }
    .slider-item.active{
        transform: none;
        transition: .5s;
    }
</style>