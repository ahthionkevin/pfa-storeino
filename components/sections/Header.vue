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
        <div class="icons flex">
            <div class="item p-2">
                <router-link to="/account" title="Standorte" class="icon icon-user">
                    <span class="hidden sm:block">{{ 'Account' }}</span>
                </router-link>
            </div>

            <div class="item p-2">
                <router-link to="/wishlist" class="icon icon-heart" data-badge="" title="Merkliste">
                    <span class="hidden sm:block">{{'Wishlist'}}</span>
                </router-link>
            </div>

            <div class="item p-2">
                <router-link to="/cart" class="icon icon-basket" data-badge="" title="Warenkorb">
                    <span class="hidden sm:block">{{'Cart'}}</span>
                </router-link>
            </div>
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