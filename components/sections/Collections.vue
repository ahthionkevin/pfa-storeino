<template>
  <div class="container">
    <div class="m-2 flex justify-between items-center">
      <h2 class="text-2xl">{{ "Top collections" }}</h2>
      <div class="flex">
        <button class="p-2 bg-gray-100 rounded-md mx-1 hover:bg-gray-200" @click="move(-1)"><svg class="w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" class=""></path></svg></button>
        <button class="p-2 bg-gray-100 rounded-md mx-1 hover:bg-gray-200" @click="move(1)"><svg class="w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" class=""></path></svg></button>
      </div>
    </div>
    <div v-if="loading" class="flex justify-center items-center my-5">
      <si-loader></si-loader>
    </div>
    <div class="overflow-hidden">
      <div class="flex carousel" :style="`width: ${items.length*width}%`">
          <div v-for="(item,i) in items" :key="i" class="w-full carousel-item sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <si-collection :item="item"></si-collection>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
      items: [],
      width: 33.33,
      screenWidth: 1200
    };
  },
  watch: {
    screenWidth(val){
      if(val<640) this.width = 100;
      if(val>=640&&val<768) this.width = 50;
      if(val>=768&&val<1024) this.width = 33.33;
      if(val>=1024) this.width = 25;
    }
  },
  async fetch(){
      try{
          const { data } = await this.$storeino.collections.search()
          this.items = data.results;
      }catch(e){
        console.log({e});
      }
      this.loading = false;
      if(process.client){
        }
  },
  methods: {
    move(n){
      var get = 'pop', set = 'unshift', width = document.querySelector('.carousel-item').offsetWidth;
      if(n==1){ get='shift', set='push', width =`-${width}` };
      document.querySelector('.carousel').style.transform = `translateX(${width}px)`;
      document.querySelector('.carousel').style.transition = `500ms`;
      setTimeout(() => {
        document.querySelector('.carousel').style.transform = `translateX(0px)`;
        document.querySelector('.carousel').style.transition = `none`;
        const el = this.items[get]();
        this.items[set](el);
      }, 500);
    }
  },
  mounted() {
    this.screenWidth = window.innerWidth;
    window.onresize = (ev)=>{ this.screenWidth = window.innerWidth }
  },
};
</script>