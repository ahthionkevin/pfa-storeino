<template>
<div v-if="item && item.review.reviews.length > 0" class="container">
    <div class="m-2">
      <h2 class="text-2xl">{{ "Customers Reviews" }}</h2>
    </div>
    <div v-if="loading" class="flex justify-center items-center my-5">
      <si-loader></si-loader>
    </div>
    <div class="bg-white rounded-md p-2 my-3 mx-2 reviews" id="reviews">
        <div class="flex flex-wrap">
            <div v-for="(review,index) in reviews.results" :key="index" class="w-full md:w-1/2">
                <div class="bg-white shadow flex justify-between flex-col m-1 p-2 h-full rounded-md">
                    <div class="flex flex-col">
                        <div class="flex">
                            <div class="flex">
                                <si-avatar :name="`${review.customer.firstname} ${review.customer.lastname}`"></si-avatar>
                                <span class="m-1"></span>
                                <div>
                                    <b class="capitalize">{{ `${review.customer.firstname} ${review.customer.lastname}` }}</b>
                                    <div class="mb-1">
                                        <span v-for="(star,i) in 5" :class="star <= review.rating ? ' text-yellow-500 ': ''" :key="i" class="icon icon-star"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>{{ review.content }}</div>
                    </div>
                    <div class="overflow-auto w-full">
                        <div class="flex bg-gray-100">
                            <si-image width="100" height="100" class="w-16 h-16 m-1 bg-white rounded-md shadow cursor-pointer" v-for="(image, index) in review.images" :key="index" :src="image" @click="$store.state.fullImage=image" :alt="`${review.rating} stars - ${review.content}`"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    props:{
        item: { type: Object, default: null }
    },
    data(){
        return {
            reviews: { paginate: { page: 0 }, results: [] },
            loading: true
        }
    },
    async fetch(){
        const { data } = await this.$storeino.reviews.search({
            "product._id": this.item._id,
            page: this.reviews.paginate.page+1
        })
        this.reviews = data;
        this.loading = false;
    }
}
</script>