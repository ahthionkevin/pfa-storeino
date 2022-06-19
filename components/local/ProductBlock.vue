<template>
        <div class="card bg-white">
            <div class="imgBx bore relative">
                 <nuxt-link :to="`/products2/${item._id}`">
                    <!-- <img :src="item.images.length > 0 ? item.images[0].src : null" :alt="item.name"/> -->
                    <img :src="item.img ? item.img : null" :alt="item.title"/>
                </nuxt-link>
                <!-- <div class="rating absolute top-5 right-2" v-if="$settings.sections.products.show_reviews">
                    <i v-for="(star,i) in 5" :class="star<= item.review.rating ? 'fa fa-star text-yellow-500 ': 'fa fa-star text-gray-400'" aria-hidden="true" :key="i"></i>
                </div> -->
                <div class="price absolute top-3 left-2 p-1 text-white rounded-xl">
                    <!-- <span class="comparative line-through" v-if="item.price.comparePrice > 0">{{ formatPrice(item.price.comparePrice).split(".")[0] }}<sup>.{{ formatPrice(item.price.comparePrice).split(".")[1] }}</sup>{{ $store.state.currency.symbol }}</span> -->
                    <span class="real font-semibold">{{ formatPrice(item.price).split(".")[0] }}<sup>.{{ formatPrice(item.price).split(".")[1] }}</sup> {{ $store.state.currency.symbol }}</span>
                </div>
                <ul class="action">
                    <li v-if="$settings.sections.products.add_to_wishlist.active">
                        <div v-if="$store.state.wishlist.find(i=>i._id==item._id)" @click="removeFromWishlist">
                            <i class="fa fa-heart text-red-700"></i>
                            <span>Remove to Your WishList</span>
                        </div>
                        <div v-else @click="addToWishlist">
                            <i class="fa fa-heart text-gray-700"></i>
                            <span>Add to Your WishList</span>
                        </div>
                    </li>
                    <li v-if="$settings.sections.products.add_to_cart.active">
                        <i class="fa fa-shopping-cart"></i>
                        <span>Add To Cart</span>
                    </li>
                    <li>
                        <nuxt-link :to="`/products2/${item._id}`">
                            <i class="fa fa-eye"></i>
                            <span>View Product</span>
                        </nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="content">
                <div class="productName text-center">
                    <h3 class="pt-4">{{this.item.title}}</h3>
                    <p>{{this.item.desc}}</p>
                </div>
                <div class="flex justify-center mt-2">
                    <nuxt-link :to="`/products2/${item._id}`">
                        <span class="order-now py-1 px-3 inline-block text-center font-semibold text-lg">Order Now</span>
                    </nuxt-link>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
         props: {
            upsell: { type: Object, default: null },
            item: Object
        },
        async fetch(){
            if(this.discount){
                if(this.item.type == 'simple'){
                    this.item.originalPrice = this.$tools.copy(this.item.price);
                    if(this.discount.type == 'percentage'){
                            this.item.price.salePrice = this.item.price.salePrice - (this.item.price.salePrice * this.discount.value / 100)
                            this.item.price.comparePrice = this.item.price.comparePrice - (this.item.price.comparePrice * this.discount.value / 100)
                    }else{
                        this.item.price.salePrice = this.item.price.salePrice - this.discount.value
                        this.item.price.comparePrice = this.item.price.comparePrice - this.discount.value
                    }
                }else{
                    this.item.variants.forEach(variant => {
                        variant.originalPrice = this.$tools.copy(variant.price)
                        if(this.discount.type == 'percentage'){
                            variant.price.salePrice = variant.price.salePrice - (variant.price.salePrice * this.discount.value / 100)
                            variant.price.comparePrice = variant.price.comparePrice - (variant.price.comparePrice * this.discount.value / 100)
                        }else{
                            variant.price.salePrice = variant.price.salePrice - this.discount.value
                            variant.price.comparePrice = variant.price.comparePrice - this.discount.value
                        }
                    });
                }
            }
        },
        data() {
            return {
                filpped: false,
                added: false,
                variant: this.item.type == 'variant' ? this.item.variants[0] : null,
                quantity: this.item.quantity,
                price: { salePrice: 0, comparePrice: 0 },
                discount: this.upsell ? this.upsell.discount : null
            }
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
            addToCart(ev) {
                // Call add to cart event
                console.log('items', this.item)
                let item = {
                    _id: this.item._id,
                    quantity: this.quantity.value ? this.quantity.value : this.item.quantity.default,
                    price: this.variant?this.variant.price.salePrice : this.item.price.salePrice,
                    variant: this.variant ? { _id: this.variant._id } : null,
                    upsell: this.upsell
                };
                this.$tools.call('ADD_TO_CART', item);
                this.$tools.toast(this.$settings.sections.alerts.added_to_cart);
                this.added = true;
                if(this.$settings.sections.products.add_to_cart_to_checkout){
                    setTimeout(() => {
                            window.location.href = '/checkout2';
                    }, 500);
                }
                setTimeout(() => {
                    this.added = false;
                }, 2000);
                this.$storeino.fbpx('AddToCart',{
                content_name: this.item.name,
                content_ids: [this.item._id],
                content_type: "product",
                value: this.variant?this.variant.price.salePrice : this.item.price.salePrice,
                currency: this.$store.state.currency && this.$store.state.currency.code ? this.$store.state.currency.code : "USD"
                })
            },
            variantSelected(variant){
                this.variant = variant;
                this.quantitySelected(this.item.quantity.value);
            },
            quantitySelected(quantity){
                this.item.quantity.value = quantity;
                if(this.variant){
                    this.price.salePrice = this.variant.price.salePrice * quantity;
                    this.price.comparePrice = this.variant.price.comparePrice * quantity;
                }else{
                    this.price.salePrice = this.item.price.salePrice * quantity;
                    this.price.comparePrice = this.item.price.comparePrice * quantity;
                }
            },
            addToWishlist(){
                this.$tools.call('ADD_TO_WISHLIST', this.item);
                this.$tools.toast(this.$settings.sections.alerts.added_to_wishlist);
            },
            removeFromWishlist(){
                this.$tools.call('REMOVE_FROM_WISHLIST', this.item);
                this.$tools.toast(this.$settings.sections.alerts.removed_from_wishlist);
            }
        },
    }
</script>

<style scoped>

     .card{
        /* background: #fff; */
        width: 310px;
        cursor: pointer;
        /* border: #333 .8px solid; */
        margin: 15px 10px;
    }

    .price{
        background-color: #4D2C21;
    }

    .order-now{
        display: inline-block;
        border-radius: 24px;
        transition: .4s ease-in-out;
        box-shadow: 0 0px 6px rgba(51, 51, 51, 0.15);
    }

    .order-now:hover{
        color: rgb(246, 53, 53);
        border: #000 solid 1px;
    }

     .card .imgBx{
        position: relative;
        width: 100%;
        overflow: hidden;
        box-shadow: 0 0px 6px rgba(51, 51, 51, 0.15);
    }

     .card .imgBx img{
        height: 320px;
        transition: .4s ease-in-out;
        
    }

     .card:hover .imgBx img{
        transform: scale(1.04);
    }

     .card .content{
        padding: 10px;
    }

     .card .content .productName h3{
        font-size: 18px;
        font-weight: 600;
        color: #333;
        margin: 5px 0;
        text-align: center;
    }

     .card .content .price_rating{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

     .card .content .price_rating h2{
       color: #3cda5e;
       font-size: 20px;
       font-weight: 600;
    }

     .card .content .price_rating .price .comparative{
       color: rgb(241, 23, 92);
       font-size: 17px;
       font-weight: 500;
       text-decoration: line-through;
    }


     .card .content .price_rating .fa{
       color: #ffd513;
    }

     .card .content .price_rating .fa.grey{
       color: #ccc;
    }

     .card .imgBx .action{
        position: absolute;
        top: 100px;
        right: 10px;
    }

     .card .imgBx .action li{
        position: relative;
        width: 40px;
        height: 40px;
        background: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        cursor: pointer;
        transform: translateX(60px);
        transition: .5s ease-in-out;
    }

     .card .imgBx .action li:nth-child(2){
        transition-delay: .15s;
    }

     .card .imgBx .action li:nth-child(3){
        transition-delay: .3s;
    }
     .card:hover .imgBx .action li{
        transform: translateX(0px);
    }
     .card .imgBx .action li:hover{
        background: #ffd5ff;
        color: rgb(201, 192, 192);
    }
     .card .imgBx .action li span{
        position: absolute;
        right: 50px;
        top: 17px;
        transform: translateY(-50%) translateX(-25px);
        white-space: nowrap;
        background: #fff;
        columns: #000;
        padding: 4px;
        font-weight: 500;
        font-size: 12px;
        border-radius: 4px;
        pointer-events: none;
        opacity: 0;
        transition: .4s ease-in-out;
        opacity: 0;
    }

     .card .imgBx .action li:hover span{
        opacity: 1;
        color: #000;
        transform: translateY(-50%) translateX(0px);

    }

     .card .imgBx .action li span::before{
        content: '';
        position: absolute;
        top: 50%;
        right: -8px;
        width: 8px;
        height: 8px;
        background: #fff;
        transform: translateY(-50%) rotate(45deg);
    }
</style>