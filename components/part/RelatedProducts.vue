<template>
  <div class="container my-7" v-if="items.length > 0">
    <div class="m-2">
      <h2 class="text-center text-4xl py-3 font-semibold">{{ $settings.sections.product.title ? $settings.sections.product.title : 'You May also Like'}}</h2>
    </div>
    <div v-if="loading" class="flex justify-center items-center my-5">
      <si-loader></si-loader>
    </div>
    <div class="flex flex-wrap justify-evenly">
      <div v-for="(item, i) in items" :key="i" class="flex flex-wrap justify-evenly w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
        <stage-product-min :item="item"></stage-product-min>
      </div>
    </div>
    <div class="flex justify-center" v-if="$settings.sections.products_1.show_more_text">
      <div class="my-2 py-2">
            <nuxt-link to="/shop">
                <button>
                    <span class="circle">
                        <span class="icon arrow"></span>
                    </span>
                    <span class="text text-lg font-bold">Show More</span>
                    <!-- <span class="text text-lg font-bold">{{ $settings.sections.products_1.show_more_text }}</span> -->
                </button>
            </nuxt-link>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
      item: Object
  },
  data() {
    return {
      loading: true,
      items: [],
    };
  },
  async fetch(){
      try{
          const ids = this.item.collections.map(c=>c._id);
          const { data } = await this.$storeino.products.search({
              "_id-ne": this.item._id,
              "collections._id-in": ids
            })
          this.items = data.results
      }catch(e){
        console.log({e});
      }
      this.loading = false;
  }
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
        left: -15px;
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