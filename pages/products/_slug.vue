<template>
    <div v-if="item">
        <meta itemprop="productID" :content="item._id" />
        <div class="container py-5"> 
            <div class="flex-box">
                <div class="left">
                    <div class="big-img">
                        <img  @click="$store.state.fullImage=image ? image.src : null" :src="image ? image.src : null " :alt="item.name"/>
                    </div>
                    <div class="images">
                        <div v-for="(image, index) in item.images" @click="setImage(index)" :key="index"  class="mr-4 small-img">
                            <img :src="image.src" :alt="`${item.name} - ${image.title}`"/>
                        </div>
                    </div>
                </div>
                <div class="right p-4">
                    <div class="url py-3">
                        <h4 class="text-sm">Home / {{ item.collections[0].name }} / <span class="text-gray-500">{{ item.name }}</span></h4> 
                    </div>
                    <div class="pname py-2">
                        <h2 class="text-3xl font-bold">{{ item.name }}</h2>
                    </div>
                    <div class="desc py-4">
                        <p class="text-base">{{ item.description }}</p>
                    </div>
                    <div  v-if="$settings.sections.product.reviews.active" class="rating">
                        <i v-for="(star,i) in 5" :class="star<= item.review.rating ? 'fa fa-star px-1 text-yellow-500 ': 'fa fa-star px-1 text-gray-400'" aria-hidden="true" :key="i"></i>
                        <span class="text-lg text-gray-400">({{ item.review.reviews.length }} customer review)</span>
                    </div>
                    <div class="price mt-5 pt-5">
                        <p class="text-4xl font-semibold">{{ formatPrice(item.price.salePrice).split(".")[0] }}<sup>.{{ formatPrice(item.price.salePrice).split(".")[1] }}</sup> {{ $store.state.currency.symbol }}</p>
                    </div>
                    <div class="py-3 my-8 order container bg-transparent flex justify-start items-center">
                        <div class="bg-red-400 py-3  px-14 mr-8 text-lg font-semibold rounded-3xl text-white" @click="addToCart">
                            Order
                        </div>
                        <div v-if="$settings.sections.products.add_to_wishlist.active">
                            <div class="py-3  px-14" v-if="$store.state.wishlist.find(i=>i._id==item._id)" @click="removeFromWishlist">
                                <i class="fa fa-heart text-red-400" style="font-size: 36px"></i>
                            </div>
                            <div class="py-3  px-14" v-else @click="addToWishlist">
                                <i class="fa fa-heart text-gray-700" style="font-size: 36px"></i>
                            </div>
                            <!-- <i class="fa fa-heart py-3  px-14 mr-8 fa-xl" style="color:#F87171;font-size: 36px"></i> -->
                        </div>
                        <!-- <button id="decrement"> - </button>
                        <input type="number" min="1" max="100" value="1" id="quantity" readonly/>
                        <button id="increment"> + </button> -->
                    </div>
                    <div v-if="item.collections && item.collections.length>0" class="collections pt-6">
                        <p>Collection: <span v-for="(c,k) in item.collections" :key="k" class="collection mx-2">{{ c.name }}</span></p>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="p-2 my-3 mx-2 description text-center container">
            <h4 class="text-center text-4xl py-3 font-semibold">Description</h4>
            <div class="p-2 my-3 mx-2 description text-base" id="description" v-html="item.html" ></div>
        </div>
    
        <div>
            <part-related-products :item="item"/>
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
            socialMedia: [
                {
                    name: 'whatsapp',
                    url: 'https://api.whatsapp.com/send?text={title}%20{url}',
                    image: 'https://storeno.b-cdn.net/themes/palest/whatsapp.png'
                },
                {
                    name: 'facebook',
                    image: 'https://storeno.b-cdn.net/themes/palest/facebook.png',
                    url: 'https://www.facebook.com/sharer.php?u={url}'
                },
                {
                    name: 'twitter',
                    url: 'https://twitter.com/intent/tweet?url={url}&text={title}',
                    image: 'https://storeno.b-cdn.net/themes/palest/twitter.png'
                },
                {
                    name: 'linkedin',
                    url: 'https://www.linkedin.com/sharing/share-offsite/?url={url}',
                    image: 'https://storeno.b-cdn.net/themes/palest/linkedin.png'
                }
            ]
        }
    },
    async fetch() {
        const { slug } = this.$route.params;
        try{
            const { data } = await this.$storeino.products.get({ slug })
            this.item = data;

            this.$store.state.seo.title = (this.item.seo.title || this.item.name) + ' - ' + this.$settings.store_name;
            this.$store.state.seo.description = this.item.seo.description || this.item.description || this.$settings.store_description;
            this.$store.state.seo.keywords = this.item.seo.keywords.length > 0 ? this.item.seo.keywords || [] : this.$settings.store_keywords || [];
            if(this.item.images.length > 0){ this.$store.state.seo.image = this.item.images[0].src; }
            // New meta tags
            [ { hid: "product:price:amount", property: "product:price:amount", content: this.price.salePrice },
            { hid: "productID", itemprop: "productID", content: this.item && this.item ? this.item._id : 'productID' }
            ].forEach(meta=>{
                const index = this.$store.state.seo.metaTags.findIndex(m=>m.hid === meta.hid);
                if(index > -1){ this.$store.state.seo.metaTags.splice(index, 1, meta); }
                this.$store.state.seo.metaTags.push(meta);
            });
            this.loading = false;
            this.quantity = this.item.quantity;
            // Set default image if exists
            if(this.item.images.length > 0) this.setImage(0);
            // Set default variant if exists
            if(this.item.type == 'variable' && this.item.variants.length > 0) this.variantSelected(this.item.variants[0]);
            // Set default quantity
            this.quantitySelected(this.quantity.default);
            // Generate share urls
            let url = `https://${this.$store.state.domain}/posts/${slug}`;
            for (const button of this.socialMedia) {
                button.url = button.url.replace(/\{title\}/gi, this.item.name).replace(/\{url\}/gi, url);
            }
            if(!process.server){
                console.log("Send facebook events");
                this.$storeino.fbpx('PageView')
                this.$storeino.fbpx('ViewContent',{
                    content_name: this.item.name?this.item.name:'',
                    content_ids: [this.item._id],
                    content_type: "product",
                    value: this.item.price.salePrice,
                    currency: this.$store.state.currency.code
                });
                this.$tools.call('PAGE_VIEW', this.item);
            }

        }catch(e){
            // Redirect to error page if product not exists
            console.log(e);
            this.$nuxt.error({ statusCode: 404, message: 'product_not_found' })
        }
    },
    mounted() {
        console.log('item=====>',this.item);
        if(this.item) this.$tools.call('PAGE_VIEW', this.item);
        window.addEventListener("APP_LOADER", e => {
            console.log("Despatching event CURRENT_PRODUCT APP_LOADER");
            window.dispatchEvent(new CustomEvent('CURRENT_PRODUCT', {
                detail: {
                    product_id: this.item._id,
                    product_quantity: this.quantity.value,
                    product_variant: this.variant ? this.variant._id : undefined,
                    product_currency: this.$store.state.currency.code,
                    product_price: this.price
                }
            }));
        });
        if(this.item){
          this.$storeino.fbpx('PageView')
           this.$storeino.fbpx('ViewContent',{
              content_name: this.item.name?this.item.name:'',
              content_ids: [this.item._id],
              content_type: "product",
              value: this.item.price.salePrice,
              currency: this.$store.state.currency.code
            })
        }


        if(this.item){
            const iframes=document.querySelectorAll('iframe')
            for(const ifram of iframes){
            const width = ifram.getAttribute('width')
            const height = ifram.getAttribute('height')
            const parent = ifram.parentNode
            if (!parent.classList.contains('video-wrapper')) {
                const div = document.createElement("div");
                ifram.after(div)
                div.classList.add('video-wrapper');
                ifram.style.width=null;
                ifram.style.height=null;
                ifram.setAttribute('width','');
                ifram.setAttribute('height','');
                div.appendChild(ifram)
            }
            }
        }

        // const productId = document.querySelector('[itemprop="productID"]')? document.querySelector('[itemprop="productID"]').content : null;
        // console.log('product id from meta====>',productId);
    },
    methods: {
        formatPrice(price){
                let stringPrice = price.toString();
                let l = stringPrice.split(".")
                if(l.length==1)
                    stringPrice = stringPrice + ".00";
                // console.log(stringPrice);
                return stringPrice;
            },
        addToCart() {
            // Call add to cart event
            this.$tools.call('ADD_TO_CART', {
                _id: this.item._id,
                quantity: this.quantity.value,
                price: this.variant?this.variant.price.salePrice : this.item.price.salePrice,
                variant: this.variant ? { _id: this.variant._id } : null
            });
            if(this.$settings.sections.products.add_to_cart_to_checkout){
                setTimeout(() => {
                        window.location.href = '/checkout2';
                }, 500);
            }
            this.$tools.toast(this.$settings.sections.alerts.added_to_cart);
        },
        addToWishlist(){
            this.$tools.call('ADD_TO_WISHLIST', this.item);
            this.$tools.toast(this.$settings.sections.alerts.added_to_wishlist);
        },
        removeFromWishlist(){
            this.$tools.call('REMOVE_FROM_WISHLIST', this.item);
            this.$tools.toast(this.$settings.sections.alerts.removed_from_wishlist);
        },
        buyNow() {
            // Add to cart and redirect to checkout
            this.addToCart();
            setTimeout(() => {
                window.location.href = '/checkout2';
            }, 500);
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
            if(!process.server){
                console.log("Despatching event CURRENT_PRODUCT quantitySelected");
                window.dispatchEvent(new CustomEvent('CURRENT_PRODUCT', {
                    detail: {
                        product_id: this.item._id,
                        product_quantity: this.quantity.value,
                        product_variant: this.variant ? this.variant._id : undefined,
                        product_currency: this.$store.state.currency.code,
                        product_price: this.price
                    }
                }));
            }
        },
        variantSelected(variant) {
            this.variant = variant;
            if(variant.imageId && this.item.images.length > 0){
                let index = this.item.images.findIndex(i=>i._id == variant.imageId);
                if(index == -1) index = 0;
                this.image = this.item.images[index];
            }else if(this.item.images.length > 0){
                this.image = this.item.images[0];
            }
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
<style>
.flex-box{
    display: flex;
    /* width: 1000px; */
    margin: 20px auto;
}

.left{
    width: 50%;

}

.big-img{
    width: 550px;
}

.big-img img{
    width: inherit;
}

.images{
    display: flex;
    justify-content: start;
    width: 100%;
    margin-top: 10px;
    flex-wrap: wrap;

}

.small-img{
    width: 150px;
    cursor: pointer;
    overflow: hidden;
    border: 1.5px solid rgba(129, 129, 129, 0.76);
    border-radius: 5px;
}

.small-img img{
    width: inherit;
    transition: .4s ease-in-out
}

.small-img:hover img{
    transform: scale(1.1);
}

.description{
    min-height: 40vh;
}

.collection{
    background-color: rgba(198, 204, 209, 0.671);
    color: rgba(89, 89, 89, 0.792);
    padding: 2px 7px;
    border-radius: 7px;
}
.video-wrapper {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-top: 56.25%;
}
.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
</style>