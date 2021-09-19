<template>
<div class="h-full flex relative overflow-hidden">
    <div class="w-full flex flex-col h-full bg-white shadow-md">
        <div class="w-100 pb-full relative">
            <nuxt-link :to="`/products/${item.slug}`">
                <img class="h-full w-full absolute inset-0  object-cover" :src="item.images.length > 0 ? item.images[0].src : $store.state.defaults.image" :alt="item.name">
            </nuxt-link>
        </div>
        <div class="text-center h-full">
            <nuxt-link :to="`/products/${item.slug}`">
                <h3 class="p-2 text-xl">{{ item.name }}</h3>
            </nuxt-link>
        </div>
        <hr class="my-1">
        <div class="flex items-center justify-center">
            <div class="mb-1">
                <span v-for="(star,i) in 5" :class="star <= item.review.rating ? ' text-yellow-500 ': ''" :key="i" class="icon icon-star"></span>
            </div>
            <span class="text-sm text-gray-600" key="count">({{ item.review.reviews.length }})</span>
        </div>
        <si-product-price :type="item.type" :price="item.price" :variants="item.variants"></si-product-price>
        <button @click="filpped=true" class="flex ai-c p-2 justify-center bg-primary text-white">
            <svg class="h-5 w-5 pt-1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            <span class="w-full">{{ 'Add To Cart' }}</span>         
        </button>
    </div>
    <transition name="flip">
     <div v-if="filpped" class="w-full flex flex-col h-full bg-white shadow-md absolute z-10">
        <button class="close-button" @click="filpped=false">
            <i class="close-icon"></i>
        </button>
        <div class="h-full">
            <nuxt-link class="text-center" :to="`/products/${item.slug}`">
                <h3 class="p-2 text-xl">{{ item.name }}</h3>
            </nuxt-link>
            <div class="flex items-center justify-center">
                <div class="mb-1">
                    <span v-for="(star,i) in 5" :class="star <= item.review.rating ? ' text-yellow-500 ': ''" :key="i" class="icon icon-star"></span>
                </div>
                <span class="text-sm text-gray-600" key="count">({{ item.review.reviews.length }})</span>
            </div>
            <si-product-price :type="item.type" :price="item.price" :variants="item.variants"></si-product-price>
            <hr class="my-2">
            <div class="w-full">
                <si-product-variants v-if="item.type=='variable'" :options="item.options" :variants="item.variants" @selected="variantSelected"></si-product-variants>
                <hr v-if="item.type=='variable'" class="my-2">
                <div class="flex justify-center">
                    <si-product-quantity @selected="quantitySelected" :quantity="quantity"></si-product-quantity>
                </div>
            </div>
        </div>
        <button @click="filpped=true" class="flex ai-c p-2 justify-center bg-primary text-white">
            <svg class="h-5 w-5 pt-1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            <span class="w-full">{{ 'Confirm' }}</span>         
        </button>
    </div>
    </transition>
</div>
</template>
<script>
export default {
    props: {
        item: Object
    },
    data() {
        return {
            filpped: false,
            variant: this.item.type == 'variant' ? this.item.variants[0] : null,
            quantity: this.item.quantity
        }
    },
    methods: {
        variantSelected(variant){
            console.log({variant});
        },
        quantitySelected(quantity){
            console.log({quantity});
        }
    },
}
</script>
<style scoped>
    .close-button{
        position: absolute;
        right: 1px;
        top: 1px;
    }
    .close-icon{
        display: block;
        width: 30px;
        height: 30px;
        overflow: hidden;
        position: relative;
        border-radius: 5px;
        background: #ffffff;
        border: 7px solid #ffffff;
        box-shadow: 0 0 5px #00000022;
    }
    .close-icon::before, .close-icon::after{
        content: '';
        width: 40px;
        height: 2px;
        display: block;
        position: absolute;
        background-color: #7c7c7c;
    }
    .close-icon::before{
        transform: rotate(45deg);
        top: 14px;
        left: -5px;
    }
    .close-icon::after{
        transform: rotate(-45deg);
        top: 0px;
        left: -5px;
    }
    .icon-star::before {
        content: '\e918';
        font-size: 14px !important;
    }
    .flip-enter-active, .flip-leave-active {
        transition: transform .5s;
    }
    .flip-enter, .flip-leave-to /* .flip-leave-active below version 2.1.8 */ {
        transform: translateX(-100%);
    }
</style>