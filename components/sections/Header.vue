<template>
<div class="bg-white mb-2">
    <div class="flex p-2 justify-between items-center container relative">
        <div class="flex h-full items-center">
            <button @click="$store.state.showHeaderMenu = !$store.state.showHeaderMenu" aria-label="Search button" class="flex flex-col p-2">
                <span class="w-5 my-0.5 h-1 bg-gray-800"></span>
                <span class="w-4 my-0.5 h-1 bg-gray-800"></span>
                <span class="w-7 my-0.5 h-1 bg-gray-800"></span>
            </button>
        </div>
        <div class="logo flex justify-center items-center">
            <router-link to="/">
                <si-image width="70" height="50" class="h-12 w-full object-contain" :src="section.logo ? section.logo.src : null" alt="Store logo"/>
            </router-link>
        </div>
        <div class="icons flex items-center">
            <button @click="showSearch=true" aria-label="Search button" class="item p-2 bg-gray-100 rounded-md mx-1 hover:bg-gray-200">
                <i class="icon icon-search"></i>
            </button>
            <router-link to="/account" title="Account" class="item p-2 bg-gray-100 rounded-md mx-1 hover:bg-gray-200">
                <span class="icon icon-user"></span>
            </router-link>
            <router-link to="/wishlist" title="Wishlist" class="item p-2 bg-gray-100 rounded-md mx-1 hover:bg-gray-200">
                <span class="icon icon-heart"></span>
            </router-link>
            <router-link to="/cart" title="Cart" id="cart-icon" class="item p-2 bg-gray-100 rounded-md mx-1 hover:bg-gray-200 relative">
                <span class="icon icon-basket"></span>
                <small class="-top-2 -right-2 rounded-full absolute w-5 h-5 p-2 bg-red-700 text-white flex justify-center items-center">{{ $store.state.cart.length }}</small>
            </router-link>
        </div>
        <div v-if="showSearch" class="flex items-center justify-center p-2 fixed inset-0 z-20">
            <div @click="showSearch=false" class="bg-black bg-opacity-50 flex fixed inset-0"></div>
            <form class="search flex container bg-gray-50 p-2 absolute rounded-md w-full border border-gray-200" action="/shop?">
                <button type="button" @click="showSearch=false" aria-label="Search button">
                    <i class="icon icon-close"></i>
                </button>
                <input autofocus class="bg-transparent outline-none w-full px-2" :placeholder="'Search for products'" type="search" name="q">
                <button aria-label="Search button">
                    <i class="icon icon-search icon-green"></i>
                </button>
            </form>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            showSearch: false,
            section: this.$store.state.settings.sections.header
        }
    },
    watch: {
        showSearch(val) {
            if (val) {
                this.$nextTick(()=>{
                    document.querySelector('form.search input').focus();
                })
            }
        }
    }
}
</script>