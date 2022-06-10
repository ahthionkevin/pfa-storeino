<!-- <template>
<div class="container flex justify-evenly" v-if="menu.items">
                <ul  v-for="(item, i) in menu.items" :key="i" class="">
                    <li class="">
                        <router-link class="p-2 m-1 w-full flex hover:text-green-700" :to="item.url">{{ item.text }}</router-link>
                    </li>
                </ul>         
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
        // async fetch(){
        //     try {
        //         const filter = {};
        //         if (this.$settings.sections.collections.items.length > 0) {
        //             this.items = this.$settings.sections.collections.items;
        //         }
        //         else {
        //             const { data } = await this.$storeino.collections.search(filter);
        //             this.items = data.results;
        //         }
        //     }
        //     catch (e) {
        //         console.log({ e });
        //     }
        //     this.loading = false;
        //     if (process.client) {
        //     }
        // },

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
 -->



<template>
        <div v-if="$settings.sections.collections.active" class="container mt-7">
            <h2 class="text-center text-4xl font-bold">{{$settings.sections.collections.title}}</h2>
            <div v-if="items.length>0" class="flex flex-wrap justify-center">
                <stage-collection v-for="(item,index) in items" :key="index" :item="item"></stage-collection>
            </div>
        </div>
</template>


<script>
    export default {
        data(){
            return{
                    items: [],
                    loading: true
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

</style>