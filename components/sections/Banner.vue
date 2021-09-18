<template>
    <div class="container">
        <div class="flex p-2">
            <div class="md:w-3/4 relative overflow-hidden">
                <div class="flex h-full mr-2 slider-item" :class="'last'" v-if="lastItem">
                    <div class="image md:w-2/3 relative">
                        <img class="h-full object-cover" :src="lastItem.image" :alt="lastItem.title">
                        <div class="flex absolute bottom-0 p-2">
                            <span v-for="(x,y) in banner.items" :key="y" :class="y==activeIndex ?'bg-green-200': ''" class="w-4 h-4 rounded-full bg-white mr-1 flex cursor-pointer" @click="activeIndex=y"></span>
                        </div>
                    </div>
                    <div class="text md:w-1/3 bg-primary text-white">
                        <div class="p-2 flex flex-col justify-between h-full">
                            <h2 class="text-2xl mb-2">{{ lastItem.title }}</h2>
                            <p class="mb-2">{{ lastItem.description }}</p>
                            <router-link class="w-full bg-white text-primary flex p-2 justify-center" v-if="lastItem.button.active" :to="lastItem.button.url">{{ lastItem.button.text }}</router-link>
                        </div>
                    </div>
                </div>
                <template v-for="(item,i) in banner.items">
                    <div class="flex h-full mr-2 slider-item" :class="i==activeIndex ? 'active': ''" :key="i">
                        <div class="image md:w-2/3 relative">
                            <img class="h-full object-cover" :src="item.image" :alt="item.title">
                            <div class="flex absolute bottom-0 p-2">
                                <span v-for="(x,y) in banner.items" :key="y" :class="y==activeIndex ?'bg-green-200': ''" class="w-4 h-4 rounded-full bg-white mr-1 flex cursor-pointer" @click="animate(y)"></span>
                            </div>
                        </div>
                        <div class="text md:w-1/3 bg-primary text-white">
                            <div class="p-2 flex flex-col justify-between h-full">
                                <h2 class="text-2xl mb-2">{{ item.title }}</h2>
                                <p class="mb-2">{{ item.description }}</p>
                                <router-link class="w-full bg-white text-primary flex p-2 justify-center" v-if="item.button.active" :to="item.button.url">{{ item.button.text }}</router-link>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
            <div class="md:w-1/4 bg-yellow-300">
                <div class="h-full">
                    <router-link :to="banner.right.url">
                        <img :src="banner.right.image" alt="Banner image" srcset="">
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
            banner: {
                items: [
                    { 
                        image: "https://www.free-wallpapers.su/data/media/2278/fr0282.jpg",
                        title: "Renal & Urology Nutrition News, Diet Tips",
                        description: "Greater consumption of healthful plant-based foods is associated with significantly reduced risks for advanced, lethal, and fatal prostate cancer, especially among men younger than 65 years",
                        button: {
                            active: true,
                            url: '/shop',
                            text: "Order now"
                        }
                    },
                    { 
                        image: "https://www.burgerking.it/site/assets/files/1926/crispy-chicken.jpg",
                        title: "Renal & Urology Nutrition News, Diet Tips",
                        description: "Greater consumption of healthful plant-based foods is associated with significantly reduced risks for advanced, lethal, and fatal prostate cancer, especially among men younger than 65 years",
                        button: {
                            active: true,
                            url: '/shop',
                            text: "Order now"
                        }
                    }
                ],
                right: {
                    image: "https://webtoolfeed.files.wordpress.com/2012/04/food-01.jpg",
                    url: '/shop',
                }
            }
        }
    },
    mounted() {
        this.animate();
    },
    methods: {
        animate(index=null){
            if(index != null){
                this.lastItem = this.banner.items[this.activeIndex];
                this.activeIndex = index;
                clearTimeout(this.timeout);
            }else{
                this.lastItem = this.banner.items[this.activeIndex];
                if(this.activeIndex >= this.banner.items.length-1) this.activeIndex = -1;
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