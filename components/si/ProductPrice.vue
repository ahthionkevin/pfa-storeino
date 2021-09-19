<template>
    <div>
        <div class="price flex justify-center my-2" v-if="type=='simple'">
            <span class="relative">
                <b class="text-gray-400">{{ price.comparePrice }}{{ $store.state.currency.symbol }}</b>
                <span class="compare-price absolute top-3 block w-full bg-red-600"></span>
            </span>
            <span class="flex w-2"></span>
            <b class=" text-primary">{{ price.salePrice }}{{ $store.state.currency.symbol }}</b>
        </div>
        <div class="price flex justify-center my-2" v-else-if="minPrice != maxPrice">
            <b class=" text-primary">{{ minPrice }}{{ $store.state.currency.symbol }}</b>
            <span class="flex">~</span>
            <b class=" text-primary">{{ maxPrice }}{{ $store.state.currency.symbol }}</b>
        </div>
        <div class="price flex justify-center my-2" v-else-if="variants.length > 0">
            <span class="relative">
                <b class="text-gray-400">{{ variants[0].price.comparePrice }}{{ $store.state.currency.symbol }}</b>
                <span class="compare-price absolute top-3 block w-full bg-red-600"></span>
            </span>
            <span class="flex w-2"></span>
            <b class=" text-primary">{{ variants[0].price.salePrice }}{{ $store.state.currency.symbol }}</b>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        type: String,
        price: Object,
        variants: { type: Array, default: [] }
    },
    data() {
        return {
            minPrice : this.type == 'variable' ? Math.min(...this.variants.map(v=>v.price.salePrice)) : 0,
            maxPrice : this.type == 'variable' ? Math.max(...this.variants.map(v=>v.price.salePrice)) : 0,
        }
    },
}
</script>
<style>
.compare-price{
    height: 1px;
    transform: rotate(-12deg);
}
</style>