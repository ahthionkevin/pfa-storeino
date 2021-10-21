<template>
    <div class="container">
        <div v-if="loading" class="flex justify-center items-center my-5">
            <si-loader></si-loader>
        </div>
        <div class="flex flex-wrap" v-if="item">
            <div class="w-full md:w-1/2">
                <div class="p-2 flex flex-col">                
                    <si-image width="500" height="500" class="w-full cursor-pointer bg-white rounded-md shadow"  @click="$store.state.fullImage=image ? image.src : null" :src="image ? image.src : null " :alt="item.name"/>
                    <div class="overflow-auto w-full">
                        <div class="flex bg-gray-100">
                            <si-image width="100" height="100" class="w-16 h-16 m-1 bg-white rounded-md shadow cursor-pointer" v-for="(image, index) in item.images" @click="setImage(index)" :key="index" :src="image.src" :alt="`${item.name} - ${image.title}`"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/2">
                <div class="p-2">
                    <div class="bg-white p-2">
                        <h1 class="text-3xl font-bold mb-2">{{ item.name }}</h1>
                        <div class="flex items-center justify-start mb-2">
                            <div class="mb-1 flex">
                                <span v-for="(star,i) in 5" :class="star <= item.review.rating ? ' text-yellow-500 ': ''" :key="i">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-5 h-5"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" class=""></path></svg>
                                </span>
                            </div>
                            <span class="text-sm text-gray-600" key="count">({{ item.review.reviews.length }})</span>
                        </div>
                        <p class="text-xl">{{ item.description }}</p>
                        <si-product-variants class="flex" v-if="item.type=='variable'" :options="item.options" :variants="item.variants" @selected="variantSelected"></si-product-variants>
                        <!-- <si-product-price class="flex text-3xl" :type="item.type" :price="item.price" :variants="item.variants"></si-product-price> -->
                        <si-product-price class="flex text-3xl" :type="'simple'" :price="price" :variants="[]"></si-product-price>
                        <div class="flex justify-start">
                            <si-product-quantity @selected="quantitySelected" :quantity="quantity"></si-product-quantity>
                        </div>
                        <hr class="my-2">
                        <div class="flex flex-wrap md:flex-nowrap">
                            <button @click="addToCart" class="w-full flex ai-c p-2 justify-center bg-primary text-white click-effect">
                                <svg class="h-5 w-5 pt-1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                <span class="w-full">{{ 'Add to cart' }}</span>         
                            </button>
                            <span class="w-1 h-1"></span>
                            <button @click="buyNow" class="w-full flex ai-c p-2 justify-center bg-primary text-white click-effect">
                                <svg class="h-5 w-5 pt-1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                <span class="w-full">{{ 'Buy Now' }}</span>         
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col">
            <div v-if="item" class="upsells">
                <sections-upsell :item="item.upsell"/>
            </div>
            <div  v-if="item" class="bg-white rounded-md p-2 my-3 mx-2 description" id="description" v-html="item.html"></div>
            <div v-if="item" class="reviews">
                <sections-reviews :item="item"></sections-reviews>
            </div>
            <div v-if="item" class="related">
                <sections-related-products :item="item"/>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loading: true,
            item: null,
            image: null,
            tab: 'description',
            quantity: {},
            variant: null,
            price: { salePrice: 0, comparePrice: 0 }
        }
    },
    async fetch() {
        const { slug } = this.$route.params;
        try{
            const { data } = await this.$storeino.products.get({ slug })
            this.item = data
            this.loading = false;
            this.quantity = this.item.quantity;
            // Set default variant if exists
            if(this.item.type == 'variable' && this.item.variants.length > 0) this.variantSelected(this.item.variants[0]);
            // Set default quantity
            this.quantitySelected(this.quantity.default);
            // Set default image if exists
            if(this.item.images.length > 0) this.setImage(0);
        }catch(e){
            // Redirect to error page if product not exists
            this.$nuxt.error({ statusCode: 404, message: 'product_not_found' })
        }
    },
    methods: {
        addToCart() {
            // Call add to cart event
            this.$tools.call('ADD_TO_CART', {
                _id: this.item._id,
                quantity: this.quantity.value,
                price: this.variant?this.variant.price.salePrice : this.item.price.salePrice,
                variant: this.variant ? { _id: this.variant._id } : null
            });
            this.$tools.toast('Added To Cart');
        },
        buyNow() {
            // Add to cart and redirect to checkout
            this.addToCart();
            this.$nextTick(()=>{ window.location.href = '/checkout2'; });  
        },
        quantitySelected(quantity) {
            this.item.quantity.value = quantity;
            if(this.variant){
                this.price.salePrice = this.variant.price.salePrice * quantity;
                this.price.comparePrice = this.variant.price.comparePrice * quantity;
            }else{
                this.price.salePrice = this.item.price.salePrice * quantity;
                this.price.comparePrice = this.item.price.comparePrice * quantity;
            }
        },
        variantSelected(variant) {
            this.variant = variant;
            this.quantitySelected(this.item.quantity.value);
        },
        setImage(index){
            this.image = this.$tools.copy(this.item.images[index]);
        },
        setTab(tab){
            this.tab = tab;
            if(tab == 'reviews' && this.reviews.results.length == 0) this.getReviews();
        }
    },
}
</script>