<template>
    <div class="container">
        <div class=" bg-white my-2 p-3">
            <h2 class="mb-2">{{'Shopping cart'}}</h2>
            <hr>
            <div v-if="loading.cart" class="flex justify-center items-center my-5">
                <si-loader></si-loader>
            </div>
            <div class="cart-items flex flex-col">
                <si-cart-item v-for="(item,i) in items" @remove="remove" :item="item" :key="i" />
            </div>
            <div v-if="!loading.cart && items.length > 0" class="flex flex-col shadow mb-2">
                <div class="bg-white p-2 flex justify-between">
                    <h2>{{ 'Cart total' }}</h2>
                    <h2 class="text-2xl text-red-700">{{ total }} {{ $store.state.currency.symbol }}</h2>
                </div>
                <div class="flex w-full justify-between">
                    <nuxt-link to="/shop" class="flex items-center text-2xl p-2 w-1/2 md:w-auto justify-center bg-gray-200 text-gray-900">
                        <svg class="h-8 w-8 pt-1 mr-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        <span class="w-full whitespace-nowrap overflow-ellipsis overflow-hidden">{{ 'Continue shopping' }}</span>         
                    </nuxt-link>
                    <nuxt-link to="/checkout2" class="flex items-center text-2xl p-2 whitespace-nowrap w-1/2 md:w-auto justify-center bg-primary text-white">
                        <svg class="h-8 w-8 pt-1 mr-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        <span class="w-full whitespace-nowrap overflow-ellipsis overflow-hidden">{{ 'Place Order' }}</span>         
                    </nuxt-link>
                </div>
            </div>
            <div v-if="!loading.cart && items.length == 0" class="flex flex-col items-center py-4">
                <h2 class="w-full text-center py-3">{{'Your cart is empty'}}</h2>
                <nuxt-link to="/shop" class="flex items-center p-2 justify-center bg-primary text-white">
                    <svg class="h-5 w-5 pt-1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    <span class="w-full">{{ 'Continue shopping' }}</span>         
                </nuxt-link>
            </div>
        </div>
        <div class="flex flex-col bg-white mb-2" v-if="!loading.cart && items.length > 0">
            <div class="m-2" v-if="upsells.length > 0">
                <h2 class="text-2xl">{{ "Special Offer For You" }}</h2>
            </div>
            <div v-if="loading.upsells" class="flex justify-center items-center my-5">
                <si-loader></si-loader>
            </div>
            <div class="flex flex-wrap" v-if="upsells.length > 0">
                <template v-for="(upsell, i) in upsells">
                    <div v-for="(product, ii) in upsell.products" :key="ii+'_'+i" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                        <si-product :item="product" :upsell="upsell"></si-product>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loading: { cart: true, upsells: true },
            items: [],
            total: 0,
            upsells: []
        }
    },
    async fetch(){
        await this.initCart();
        if(this.items.length > 0){
            await this.getUpsells();
        }
    },
    watch: {
        async "$store.state.cart.length"(){
            await this.initCart();
            await this.getUpsells();
        },
        items: {
            deep: true,
            handler(){
                this.calcTotal();
            }
        }
    },
    methods: {
        async getUpsells(){
            const ids = this.$store.state.cart.map(item => item._id);
            this.loading.upsells = true;
            try{
                const response = await this.$storeino.upsells.search({ 'with': ['products'],'product._id-in': ids, limit: 1000 });
                this.upsells = response.data.results;
            }catch(e){
                console.log(e);
            }
            this.loading.upsells = false;
        },
        async initCart(){
            console.log("Init");
            this.items = [];
            const ids = this.$store.state.cart.map(item => item._id);
            this.loading.cart = true;
            try{
                const response = await this.$storeino.products.search({ '_id-in': ids, limit: 1000 });
                const products = response.data.results;
                for (const item of this.$store.state.cart) {
                    const cartItem = {};
                    const product = products.find(p => p._id === item._id);
                    cartItem._id = product._id;
                    cartItem.slug = product.slug;
                    cartItem.name = product.name;
                    cartItem.price = product.price.salePrice;
                    cartItem.quantity = product.quantity;
                    cartItem.quantity.value = item.quantity;
                    cartItem.image = product.images.length > 0 ? product.images[0].src : '';
                    if(item.variant && item.variant._id){
                        cartItem.variant = product.variants.find(variant => variant._id === item.variant._id);
                        cartItem.price = cartItem.variant.price.salePrice;
                    }
                    if(item.upsell){
                        cartItem.upsell = item.upsell;
                        const discount = cartItem.upsell.type == 'percentage' ? cartItem.price * (cartItem.upsell.value / 100) : cartItem.upsell.value
                        cartItem.price = cartItem.price - discount;
                    }
                    cartItem.total = cartItem.price * cartItem.quantity.value;
                    console.log("Push");
                    this.items.push(cartItem);
                }
                this.calcTotal();
            }catch(e){
                console.log(e);
            }
            this.loading.cart = false;
        },
        async remove(item){
            this.$tools.call('REMOVE_FROM_CART', item);
        },
        calcTotal(){
            this.total = this.items.reduce((total, item) => total + (item.price * item.quantity.value), 0);
        }
    },
}
</script>