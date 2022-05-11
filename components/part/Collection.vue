<template>
<div class="container">
<div id="slider" class="flex top-auto bottom-auto left-10 ">
               
               <button  onclick="window.location.href='tel:+2125612346789';" data-mdb-ripple="true" data-mdb-ripple-color="light" class="inline-block p-3 mb-2 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out" style="background-color: #A1BA32;">
             <svg class="w-4 h-4" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 201.629 201.629" style="enable-background:new 0 0 201.629 201.629;" xml:space="preserve">
             <path fill="currentColor" d="M139.321,201.629c-1.457,0-2.925-0.14-4.387-0.426c-0.04-0.006-0.08-0.012-0.12-0.019
	c-2.116-0.364-52.265-9.341-89.971-47.047C14.447,123.742,4.194,84.726,1.17,69.123c-0.564-1.856-0.888-3.791-0.962-5.757
	c-0.023-0.219-0.029-0.438-0.018-0.656c-0.054-6.129,2.288-11.87,6.615-16.197l12.818-12.818c0.75-0.75,1.768-1.172,2.828-1.172
	s2.078,0.422,2.828,1.172l41.479,41.48c1.563,1.562,1.563,4.095,0,5.656L53.942,93.649c-0.327,0.327-0.656,0.637-0.992,0.935
	c-5.987,5.316-7.148,14.626-2.694,21.65c4.279,6.747,9.12,12.838,14.387,18.105c6.239,6.238,13.642,11.89,22.001,16.795
	c6.837,4.012,15.627,2.726,21.379-3.127l0.139-0.14l12.818-12.817c1.563-1.563,4.094-1.563,5.656,0l41.479,41.479
	c1.563,1.562,1.563,4.095,0,5.656l-12.817,12.818C151.006,199.296,145.262,201.629,139.321,201.629z M135.976,193.265
	c0.11,0.014,0.22,0.031,0.329,0.054c4.857,1.008,9.843-0.478,13.337-3.971l9.988-9.989l-35.822-35.822l-10.104,10.104
	c-8.302,8.448-21.105,10.265-31.108,4.396c-8.946-5.25-16.889-11.319-23.608-18.039c-5.682-5.682-10.893-12.234-15.486-19.478
	c-6.531-10.301-4.75-24.024,4.145-31.923c0.226-0.198,0.438-0.4,0.646-0.608l9.984-9.984L22.452,42.18l-9.99,9.989
	c-2.832,2.833-4.348,6.609-4.27,10.637c0.003,0.044,0.005,0.087,0.006,0.131c0.04,1.376,0.266,2.725,0.672,4.008
	c0.046,0.147,0.084,0.298,0.113,0.45c2.831,14.729,12.544,52.113,41.517,81.087C85.282,183.264,132.552,192.626,135.976,193.265z
	 M197.444,110.944c-2.209,0-4-1.791-4-4C193.444,52.387,149.058,8,94.5,8c-2.209,0-4-1.791-4-4s1.791-4,4-4
	c58.97,0,106.944,47.975,106.944,106.944C201.444,109.153,199.653,110.944,197.444,110.944z M172.624,110.944c-2.209,0-4-1.791-4-4
	c0-41.226-33.539-74.765-74.764-74.765c-2.209,0-4-1.791-4-4s1.791-4,4-4c45.636,0,82.764,37.128,82.764,82.765
	C176.624,109.153,174.833,110.944,172.624,110.944z M147.866,110.944c-2.209,0-4-1.791-4-4c0-27.573-22.433-50.006-50.006-50.006
	c-2.209,0-4-1.791-4-4s1.791-4,4-4c31.984,0,58.006,26.021,58.006,58.006C151.866,109.153,150.075,110.944,147.866,110.944z"/>
                </svg>
                
                </button>
                <div v-if="dropdown">
                    <h1>S</h1>
                </div>

</div>

<div id="slide2" class="absolute right-10 top-auto bottom-auto">
               
               <button  v-on:click="Tec = !Tec" data-mdb-ripple="true" data-mdb-ripple-color="light" class="inline-block p-3 mb-2 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out" style="background-color: #A1BA32;">
             <svg class="w-4 h-4" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 201.629 201.629" style="enable-background:new 0 0 201.629 201.629;" xml:space="preserve">
             <path fill="currentColor" d="M139.321,201.629c-1.457,0-2.925-0.14-4.387-0.426c-0.04-0.006-0.08-0.012-0.12-0.019
	c-2.116-0.364-52.265-9.341-89.971-47.047C14.447,123.742,4.194,84.726,1.17,69.123c-0.564-1.856-0.888-3.791-0.962-5.757
	c-0.023-0.219-0.029-0.438-0.018-0.656c-0.054-6.129,2.288-11.87,6.615-16.197l12.818-12.818c0.75-0.75,1.768-1.172,2.828-1.172
	s2.078,0.422,2.828,1.172l41.479,41.48c1.563,1.562,1.563,4.095,0,5.656L53.942,93.649c-0.327,0.327-0.656,0.637-0.992,0.935
	c-5.987,5.316-7.148,14.626-2.694,21.65c4.279,6.747,9.12,12.838,14.387,18.105c6.239,6.238,13.642,11.89,22.001,16.795
	c6.837,4.012,15.627,2.726,21.379-3.127l0.139-0.14l12.818-12.817c1.563-1.563,4.094-1.563,5.656,0l41.479,41.479
	c1.563,1.562,1.563,4.095,0,5.656l-12.817,12.818C151.006,199.296,145.262,201.629,139.321,201.629z M135.976,193.265
	c0.11,0.014,0.22,0.031,0.329,0.054c4.857,1.008,9.843-0.478,13.337-3.971l9.988-9.989l-35.822-35.822l-10.104,10.104
	c-8.302,8.448-21.105,10.265-31.108,4.396c-8.946-5.25-16.889-11.319-23.608-18.039c-5.682-5.682-10.893-12.234-15.486-19.478
	c-6.531-10.301-4.75-24.024,4.145-31.923c0.226-0.198,0.438-0.4,0.646-0.608l9.984-9.984L22.452,42.18l-9.99,9.989
	c-2.832,2.833-4.348,6.609-4.27,10.637c0.003,0.044,0.005,0.087,0.006,0.131c0.04,1.376,0.266,2.725,0.672,4.008
	c0.046,0.147,0.084,0.298,0.113,0.45c2.831,14.729,12.544,52.113,41.517,81.087C85.282,183.264,132.552,192.626,135.976,193.265z
	 M197.444,110.944c-2.209,0-4-1.791-4-4C193.444,52.387,149.058,8,94.5,8c-2.209,0-4-1.791-4-4s1.791-4,4-4
	c58.97,0,106.944,47.975,106.944,106.944C201.444,109.153,199.653,110.944,197.444,110.944z M172.624,110.944c-2.209,0-4-1.791-4-4
	c0-41.226-33.539-74.765-74.764-74.765c-2.209,0-4-1.791-4-4s1.791-4,4-4c45.636,0,82.764,37.128,82.764,82.765
	C176.624,109.153,174.833,110.944,172.624,110.944z M147.866,110.944c-2.209,0-4-1.791-4-4c0-27.573-22.433-50.006-50.006-50.006
	c-2.209,0-4-1.791-4-4s1.791-4,4-4c31.984,0,58.006,26.021,58.006,58.006C151.866,109.153,150.075,110.944,147.866,110.944z"/>
                </svg>
                
                </button>
                <div v-if="Tec">
                     <div v-if="menu">
                <ul v-for="(item, i) in menu.items" :key="i" class="flex flex-col">
                    <li class="flex items-center mb-1 justify-between w-full rounded-md bg-white">
                        <router-link class="p-2 m-1 w-full flex hover:text-green-700" :to="item.url">{{ item.text }}</router-link>
                        <button class="bg-white p-2 mx-1" @click="activeId = activeId != item._id ? item._id : null">
                            <si-svg>
                                <svg v-if="item.childrens && item.childrens.length > 0" class="w-3 transform" :class="activeId==item._id ? 'rotate-180': ''" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve">
                                    <path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
                                </svg>
                            </si-svg>
                        </button>
                    </li>
                    <transition name="slide">
                    <div v-if="item._id == activeId">
                        <div v-for="(item,i) in item.childrens" :key="i" class="bg-gray-100">
                            <router-link class="p-2 m-1 rounded-md bg-gray-50 hover:bg-white hover:text-green-700 flex" :to="item.url">{{item.text}}</router-link>
                            <ul class="p-2" v-if="item.childrens && item.childrens.length > 0">
                                <li v-for="(child,ii) in item.childrens" :key="ii">
                                    <nuxt-link  class="p-2 m-1 rounded-md bg-gray-50 hover:bg-white hover:text-green-700 flex" :to="child.url">
                                        {{ child.text }}
                                    </nuxt-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </transition>
                </ul>
            </div>
                </div>
                
</div>
                 
        <div v-if="$settings.sections.collections.active" class="container mt-7">
            <h2 class="text-center text-4xl font-bold">{{$settings.sections.collections.title}}</h2>
            <div v-if="items.length>0" class="flex flex-wrap justify-center">
                <stage-collection v-for="(item,index) in items" :key="index" :item="item"></stage-collection>
            </div>
        </div>
 </div>       
</template>

<script>
    export default {
        data(){
            
            return{

                    menu: this.$settings.sections.header.menu,
                    items: [],
                    loading: true,
                    Tec: false
            }
        },
        async fetch(){
            try {
                const filter = {};
                if (this.$settings.sections.collections.items.length > 0) {
                    this.items = this.$settings.sections.collections.items;
                }
                else {
                    const { data } = await this.$storeino.collections.search(filter);
                    this.items = data.results;
                }
            }
            catch (e) {
                console.log({ e });
            }
            this.loading = false;
            if (process.client) {
            }
        },

        mounted() {
            console.log(this.items);
        },
    }
</script>

<style scoped>
div#slider{    
  position: fixed;
  z-index:9;
}

div#slide2{    
  position: fixed;
  z-index:9;
}


</style>