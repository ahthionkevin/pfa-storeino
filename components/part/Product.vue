<template>
    <div class="container my-5">
        <h4 class="text-center text-4xl py-3 font-semibold">{{ title }}</h4>
        <div class="flex flex-wrap justify-evenly">
            <stage-product-block v-for="(item,key) in this.items" :key="key" :item="item"></stage-product-block>
        </div>
        <div class="flex justify-center" v-if="section.show_more_text">
            <!-- <nuxt-link class="py-2 px-4 w-full mx-2 bg-white shadow rounded hover:bg-gray-50 text-primary flex items-center" :to="section.show_more_url">
                <span class="w-full">{{ section.show_more_text }}</span>
                <svg class="h-4 text-primary translate" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" x="0" y="0" viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 512 512" xml:space="preserve"><g> <g xmlns="http://www.w3.org/2000/svg"> <g> <path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z" fill="currentColor" data-original="currentColor" style="" class=""></path> </g> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> </g></svg>
            </nuxt-link> -->
            <div class="my-2 py-2">
                <nuxt-link :to="section.show_more_url">
                    <button>
                        <span class="circle">
                            <span class="icon arrow"></span>
                        </span>
                        <span class="text text-lg font-bold">{{ section.show_more_text }}</span>
                    </button>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            section: { type: Object, required: true }
        },
        data() {
            return {
            title: this.section.title,
            tags: this.section.tags,
            collections: this.section.collections,
            items: [],
            loading: true
            };
        },
        async fetch(){
            let filter = { status: 'PUBLISH' };
            if(this.collections.length > 0) filter['collections._id-in'] = this.collections.map(c=>c._id);
            if(this.tags.length > 0) filter['tags._id-in'] = this.tags.split(',');
            await this.getProducts(filter);
            console.log(this.items);
        },
        methods: {
            async getProducts(filter){
            this.loading = true;
            try{
                const { data } = await this.$storeino.products.search(filter)
                this.items = data.results
                //  console.log(data);
            }catch(e){
                console.log({e});
            }
            this.loading = false;
            },
        },
    };
</script>

<style scoped>
    button{
        position: relative;
        border: 0;
        display: inline-block;
        width: 12rem;
        height: auto;
        cursor: pointer;
        outline: none;
        vertical-align: middle;
        background: transparent;
    }

    .text{
        position: absolute;
        inset: 0;
        padding: 0.7rem 0;
        margin-left: 1.85rem;
        color: #f82936;
        line-height: 1.6;
        text-align: center;
        transition: all .4s ease-in-out;   
        font-weight: 700;
        margin-left: 5px;     
    }

    .circle{
        position: relative;
        display: block;
        margin: 0;
        width: 3rem;
        height: 3rem;
        background: #f82936;
        border-radius: 1.625rem;
        transition: all .4s ease-in-out;
    }

    .icon{
        position: absolute;
        top: 2rem;
        bottom: 0;
        margin: 0;
        /* background: #trans; */
    }

    .arrow{
        left: 0.625rem;
        width: 0.625rem;
        height: 0.5rem;
        background: none;
        transition: all .4s ease-in-out;
    }

    .arrow::before{
        content: "";
        position: absolute;
        top: -0.7rem;
        right: -0.5rem;
        width: 0.625rem;
        height: 0.625rem;
        border-top: 0.125rem solid #fff;
        border-right: 0.125rem solid #fff;
        transform: rotate(45deg);
    }

    button:hover .circle{
        width: 110%;
    }

    button:hover .arrow{
        /* background: #fff; */
        transform: translateX(1.3rem);
    }

    button:hover .text{
        color: #fff;
    }
</style>