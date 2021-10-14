<template>
    <div class="container">
        <div class="flex mb-2">
            <div class="w-1/4">
                <div class="border-r bg-white h-full flex flex-col">
                    <h2 class="px-2">{{ 'Collections' }}</h2>
                    <div class=" flex flex-col">
                        <div v-for="(item, i) in collections" :key="i" class="flex items-center px-2">
                            <input class="w-4 h-4 mr-1" :id="item.slug" @change="setParams($event, 'collections.slug-in', item.slug)" type="checkbox"/>
                            <label class="cursor-pointer" :for="item.slug">{{ item.name }}</label>
                        </div>
                    </div>
                    <hr>
                    <h2 class="px-2">{{ 'Prices' }}</h2>
                    <div v-if="filters" class=" flex flex-col">
                        <div class="flex items-center px-2 relative">
                            <input class="absolute left-0 top-0" :min="filters.prices.min" :max="filters.prices.max" :id="'min-price'" @change="setParams($event, 'price.salePrice-from')" type="range"/>
                            <input :min="filters.prices.min" :max="filters.prices.max" :id="'max-price'" @change="setParams($event, 'price.salePrice-to')" type="range"/>
                        </div>
                    </div>
                    <hr>
                    <h2 class="px-2">{{ 'Sizes' }}</h2>
                    <hr>
                    <h2 class="px-2">{{ 'Colors' }}</h2>
                    <hr>
                    <h2 class="px-2">{{ 'Tags' }}</h2>
                    <hr>
                    <h2 class="px-2">{{ 'Brands' }}</h2>
                </div>
            </div>
            <div class="w-3/4">
                <div class="bg-white">
                    <div class=" border-b">
                        <div class="flex justify-between items-center p-2">
                            <select class="bg-white p-2 rounded shadow outline-none" v-model="params.sort">
                                <option v-for="(sort,i) in sorts" :key="i" :value="sort.field">{{ sort.name }}</option>
                            </select>
                            <div class="flex">
                                <button v-for="(grid,i) in girds" :key="i" @click="gridClass=grid.class" class="flex flex-wrap mx-0.5" :style="`width:${grid.width}px`">
                                    <span v-for="i in grid.number" :key="i" class="flex" :class="grid.class == gridClass ? 'bg-primary':'bg-gray-300'" style="margin:1px;width:4px;height:4px" ></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div v-if="loading.products" class="flex justify-center items-center my-5">
                        <si-loader></si-loader>
                    </div>
                    <div class="flex flex-wrap">
                        <div v-for="(item, i) in items" :key="i" class="p-2" :class="gridClass">
                            <si-product :item="item"></si-product>
                        </div>
                    </div>
                    <div>
                        <!-- Pagination -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loading: {
                products: true,
                filters: true,
                collections: false
            },
            filters: null,
            gridClass: 'w-full md:w-1/2 lg:w-1/3',
            items: [],
            collections:[],
            paginate: { page: 1, limit: 12, total: 12 },
            params: { 'collections.slug-in': [], sort: { createdAt: -1 } },
            lastParams: { 'collections.slug-in': [], sort: { createdAt: -1 } },
            sorts: [
                { field: { 'price.salePrice': 1 }, name: 'Price: Low to High' },
                { field: { 'price.salePrice': -1 }, name: 'Price: High to Low' },
                { field: { 'review.rating': -1 }, name: 'Reviews: High to Low' },
                { field: { 'review.rating': 1 }, name: 'Reviews: Low to High' },
                { field: { 'name': 1 }, name: 'Name: A to Z' },
                { field: { 'name': -1 }, name: 'Name: Z to A' },
                { field: { createdAt: -1 }, name: 'Newest' },
                { field: { createdAt: 1 }, name: 'Oldest' }
            ],
            girds: [
                { number: 6, width: 16, class: 'w-full md:w-1/2 lg:w-1/2' },
                { number: 9, width: 21, class: 'w-full md:w-1/2 lg:w-1/3' },
                { number: 12, width: 26, class: 'w-1/2 md:w-1/3 lg:w-1/4' }
            ]
        }
    },
    watch: {
        params: {
            handler(val) {
                if(JSON.stringify(val) !== JSON.stringify(this.lastParams)){
                    this.getItems();
                }
            },
            deep: true
        }
    },
    async fetch(){
        await this.getItems();
        await this.getCollections();
        await this.getFilters();
    },
    methods: {
        setParams(e, key, value){
            if(key.indexOf('price') >= 0){
                this.params[key] = e.target.value;
            }else{
                if(e.target.checked) {
                    this.params[key] = this.params[key] || [];
                    this.params[key].push(value);
                } else {
                    this.params[key] = this.params[key].filter(item => item !== value);
                }
            }
        },
        async getFilters(){
            this.filters = null;
            this.loading.filters = true;
            try{
                const { data } = await this.$storeino.products.filters({});
                this.filters = data;
            }catch(e){
                console.log({e});
            }
            this.loading.filters = false;
        },
        async getCollections(){
            this.collections = [];
            this.loading.collections = true;
            try{
                const { data } = await this.$storeino.collections.search({});
                this.collections = data.results;
            }catch(e){
                console.log({e});
            }
            this.loading.collections = false;
        },
        async getItems(){
            this.items = [];
            this.loading.products = true;
            try{
                this.lastParams = this.$tools.copy(this.params);
                const { data } = await this.$storeino.products.search(this.params);
                this.items = data.results
            }catch(e){
                console.log({e});
            }
            this.loading.products = false;
        },
    },
}
</script>