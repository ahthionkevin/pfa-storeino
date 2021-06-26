<template>
  <div class="container">
    <div class="m-2">
      <h2 class="text-2xl">{{ "Top collections" }}</h2>
    </div>
    <div class="flex flex-wrap">
      <div v-for="(item,i) in items" :key="i" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
        <si-collection :item="item"></si-collection>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  async fetch(){
      try{
          const { data } = await this.$storeino.collections.search()
          this.items = data.results
          this.loading = false;
      }catch(e){
        console.log({e});
      }
  }
};
</script>