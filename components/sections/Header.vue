<template>
    <div class="flex p-2 justify-between items-center container">
        <div class="logo flex justify-center items-center">
            <router-link to="/">
                <si-image width="70" height="50" class="h-12 w-full object-contain" :src="section.logo ? section.logo.src : null" alt="Store logo"/>
            </router-link>
        </div>
        <form class="flex bg-gray-100 p-2 rounded-md mx-2 w-full border border-gray-200" action="/shop?">
            <input class="bg-transparent outline-none w-full" :placeholder="'Search for products'" type="search" name="q">
            <button aria-label="Search button">
                <i class="icon icon-search icon-green"></i>
            </button>
        </form>
        <div class="icons flex items-center">
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
    </div>
</template>
<script>
export default {
    data() {
        return {
            section: this.$store.state.settings.sections.header
        }
    },  
}
</script>