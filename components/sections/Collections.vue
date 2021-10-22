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
      <div class="flex carousel" v-if="items.length>0" :style="`width: ${items.length*width}%`">
          <div v-for="(item,i) in items" :key="i" class="w-full carousel-item sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <si-collection :item="item"></si-collection>
          </div>
      </div>
    </div>
    <div v-if="!loading && items.length==0" class="flex flex-wrap items-center bg-white p-2 mx-2 border rounded">
      <div class="w-full md:w-1/2">
        <svg class="h-40 max-w-full text-gray-400" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 62 62" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><g xmlns="http://www.w3.org/2000/svg"><path d="m62 37c0-1.654-1.346-3-3-3-.395 0-.77.081-1.116.22-.345-1.275-1.501-2.22-2.884-2.22-.771 0-1.468.301-2 .78-.532-.48-1.229-.78-2-.78-.352 0-.686.072-1 .184v-2.184h8c1.103 0 2-.897 2-2v-26c0-1.103-.897-2-2-2h-26c-1.103 0-2 .897-2 2v4h-25c-2.757 0-5 2.243-5 5v36c0 2.757 2.243 5 5 5h17v4h-2c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2v-2c0-1.103-.897-2-2-2h-2v-4h6.895l-1 10h18.211l-1.066-10.659c1.905-2.078 2.96-4.746 2.96-7.583zm-56 5v-30h24v2h-.172c-1.773 0-3.456.585-4.828 1.665-1.372-1.08-3.055-1.665-4.828-1.665h-8.172v2h-4v22h13.401c.769 1.243 2.115 2 3.599 2s2.83-.757 3.599-2h11.401v4zm30-12h2v6h-10.618l-.382.764c-.381.762-1.147 1.236-2 1.236s-1.619-.474-2-1.236l-.382-.764h-12.618v-18h2v16h8.172c1.745 0 3.459-.6 4.828-1.668 1.369 1.068 3.083 1.668 4.828 1.668h6.172zm-12 .558c-1.055.918-2.426 1.442-3.828 1.442h-6.172v-16h6.172c1.424 0 2.767.513 3.828 1.441zm16 5.442v-6h4v4.556c-.591-.344-1.268-.556-2-.556-1.103 0-2 .897-2 2zm.293-28.121c-.189-.189-.293-.441-.293-.708v-.171c0-.551.448-1 1-1 .313 0 .612.149.8.4l1.2 1.6h-2.586zm7.707 16.121v-10h4v10zm0-12v-2h6l.001 2zm-2-2v2h-2v-2zm4-2.829c0 .267-.104.519-.293.708l-.121.121h-2.586l1.201-1.601c.187-.25.486-.399.799-.399.552 0 1 .449 1 1zm-8 2.829v2h-6v-2zm-4 4h4v10h-4zm6 0h2v10h-2zm-12-12h26v26h-8v-1c0-.352-.072-.686-.184-1h2.184c1.103 0 2-.897 2-2v-10c1.103 0 2-.897 2-2v-2c0-1.103-.897-2-2-2h-2.13c.077-.267.13-.543.13-.829v-.171c0-1.654-1.346-3-3-3-.94 0-1.837.449-2.399 1.2l-1.601 2.133-1.6-2.133c-.563-.751-1.46-1.2-2.4-1.2-1.654 0-3 1.346-3 3v.171c0 .286.053.562.13.829h-2.13c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2v10c0 1.103.897 2 2 2h6.184c-.112.314-.184.648-.184 1v1h-12zm2 28v2h-4.172c-1.402 0-2.773-.524-3.828-1.442v-13.117c1.062-.928 2.404-1.441 3.828-1.441h.172v12c0 1.103.897 2 2 2zm-32 17v-36c0-1.654 1.346-3 3-3h25v2h-24c-1.103 0-2 .897-2 2v30c0 1.103.897 2 2 2h34.012c.046 2.167.693 4.234 1.877 6h-36.889c-1.654 0-3-1.346-3-3zm36.002 13h-18.002v-2h18zm-4.002-4h-10v-4h10zm10.105 4 .8-8h12.189l.8 8zm15.895-16.242c0 2.336-.87 4.533-2.441 6.242h-13.118c-1.571-1.709-2.441-3.906-2.441-6.242v-7.758c1.103 0 2 .897 2 2v2h2v-2-11c0-.551.448-1 1-1s1 .449 1 1v8 1 4h2v-4-1c0-.552.448-1 1-1s1 .448 1 1v1 4h2v-4-1c0-.552.448-1 1-1s1 .448 1 1v2 1 2h2v-2-1c0-.552.448-1 1-1s1 .448 1 1z" fill="currentColor" data-original="#000000" style="" class=""></path><path d="m24 46h10v2h-10z" fill="currentColor" data-original="#000000" style="" class=""></path><path d="m16 18h4v2h-4z" fill="currentColor" data-original="#000000" style="" class=""></path><path d="m16 22h6v2h-6z" fill="currentColor" data-original="#000000" style="" class=""></path><path d="m16 26h6v2h-6z" fill="currentColor" data-original="#000000" style="" class=""></path></g></g></svg>
      </div>
      <div class="w-full md:w-1/2 border-l pl-4">
        <h2>{{ 'You don\'t have any collection' }}</h2>
        <p>{{ 'Go to your store admin > products > collections >' }} <a href="//business.storeino.com/stores/collections" target="_blank" class=" text-blue-600">{{ 'Add new' }}</a></p>
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
      if(!document.querySelector('.carousel-item')) return;
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