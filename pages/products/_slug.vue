<template>
    <div class="container">
        <div v-if="loading" class="w-full flex justify-center">
            loading...
        </div>
        <div class="flex flex-wrap" v-if="item">
            <div class="w-full md:w-1/2">
                <div class="p-2 flex flex-col">                
                    <si-image class="w-full bg-white rounded-md shadow" :src="image ? image.src : null " :alt="item.name"/>
                    <div class="overflow-auto w-full">
                        <div class="flex bg-gray-100">
                            <si-image class="w-16 h-16 m-2 bg-white rounded-md shadow cursor-pointer" v-for="(image, index) in item.images" @click="setImage(index)" :key="index" :src="image.src" :alt="`${item.name} - ${image.title}`"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/2">
                <div class="p-2">
                    <div class="bg-white p-2">
                        <h1 class="text-3xl font-bold mb-2">{{ item.name }}</h1>
                        <div class="flex items-center justify-start mb-2">
                            <div class="mb-1">
                                <span v-for="(star,i) in 5" :class="star <= item.review.rating ? ' text-yellow-500 ': ''" :key="i" class="icon icon-star"></span>
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
                            <button class="w-full flex ai-c p-2 justify-center bg-primary text-white">
                                <svg class="h-5 w-5 pt-1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                <span class="w-full">{{ 'Add to cart' }}</span>         
                            </button>
                            <span class="w-1 h-1"></span>
                            <button class="w-full flex ai-c p-2 justify-center bg-primary text-white">
                                <svg class="h-5 w-5 pt-1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                <span class="w-full">{{ 'Buy Now' }}</span>         
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col">
            <div class="mx-2 p-1 bg-gray-100">
                <button class="bg-white p-2" :class="tab == 'description' ? 'bg-primary text-white': 'bg-white'" @click="setTab('description')">{{ 'Description' }}</button>
                <span class="mr-1"></span>
                <button class="bg-white p-2" :class="tab == 'reviews' ? 'bg-primary text-white': 'bg-white'" @click="setTab('reviews')">{{ 'Reviews' }}</button>
            </div>
            <div  v-if="item && tab == 'description'" class="bg-white rounded-md p-2 my-3 mx-2 description" v-html="item.html"></div>
            <div v-if="item && tab == 'reviews'" class="bg-white rounded-md p-2 my-3 mx-2 reviews">
                <div class="flex flex-wrap">
                    <div v-for="(review,index) in reviews.results" :key="index" class="w-full md:w-1/2">
                        <div class="bg-white">
                            {{ review.content }}
                        </div>
                    </div>
                </div>
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
            price: { salePrice: 0, comparePrice: 0 },
            reviews: { paginate: { page: 0 }, results: [] }
        }
    },
    async fetch() {
        const { slug } = this.$route.params;
        try{
            const { data } = await this.$storeino.products.get({ slug })
            this.item = data
            this.loading = false;
            this.quantity = this.item.quantity;
            this.quantitySelected(this.quantity.default);
            if(this.item.images.length > 0) this.setImage(0);
        }catch(e){
            this.$nuxt.error({ statusCode: 404, message: 'product_not_found' })
        }
        if(this.item.review.reviews.length > 0){
            try {
                await this.getReviews();
            } catch (e) {
                console.log({e});
            }
        }
    },
    methods: {
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
        },
        async getReviews(){
            const { data } = await this.$storeino.reviews.search({
                "product._id": this.item._id,
                page: this.reviews.paginate.page+1
            })
            this.reviews = data;
        }
    },
}
</script>