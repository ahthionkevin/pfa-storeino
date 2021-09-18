<template>
    <div class="flex p-2 justify-between items-center container">
        <div class="logo flex justify-center items-center">
            <router-link to="/">
                <img class="h-12" height="40"
                    src="https://findlogovector.com/wp-content/uploads/2019/06/baywa-ag-logo-vector.png"
                    alt="Store logo" srcset="">
            </router-link>
        </div>
        <form class="flex bg-gray-100 p-2 mx-2 w-full border border-gray-200" action="/shop?">
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