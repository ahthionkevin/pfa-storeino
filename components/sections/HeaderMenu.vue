<template>
<div class="flex fixed inset-0 z-20" v-if="$store.state.showHeaderMenu">
    <div class="flex fixed inset-0 bg-black bg-opacity-50" @click="show=false"></div>
     <transition name="slideleft">
        <div :class="show ? 'menu-container-in': 'menu-container'" class="transition-all delay-500 max-w-full relative flex flex-col bg-gray-100 w-80">
            <div class="w-full flex justify-end">
                <button @click="show=false" aria-label="Search button" class="item p-1 bg-gray-100 rounded-md m-1 hover:bg-gray-200">
                    <i class="icon icon-close"></i>
                </button>
            </div>
            <ul v-for="(item, i) in menu.items" :key="i" class="flex flex-col">
                <li class="flex items-center mb-1 justify-between w-full rounded-md bg-white">
                    <router-link class="p-2 m-1 w-full flex hover:text-green-700" :to="item.url">{{ item.text }}</router-link>
                    <button class="bg-white p-2 mx-1" @click="activeId = activeId != item._id ? item._id : null">
                        <svg class="w-3 transform" :class="activeId==item._id ? 'rotate-180': ''" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve">
                            <path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
                        </svg>
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
     </transition>
</div>
    <!-- <div class="mb-2 relative" @mouseleave="activeItem=null">
        <div class="overflow-auto w-full bg-gray-100">
            <div class="container">
                <ul class="flex">
                    <li v-for="(item, i) in menu.items" :key="i" @mouseenter="activeItem=item">
                        <router-link class="p-2 m-1 rounded-md bg-gray-50 hover:bg-white hover:text-green-700 flex" :to="item.url">{{ item.text }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="absolute w-full z-10" v-if="activeItem">
            <div class="container flex flex-wrap bg-white shadow p-4">
                <div v-for="(item,i) in activeItem.childrens" :key="i">
                    <div class="p-2">
                        <h4 class="font-bold px-2">
                            <router-link :to="item.url">{{item.text}}</router-link>
                        </h4>
                        <ul class="p-2" v-if="item.childrens && item.childrens.length > 0">
                            <li v-for="(child,ii) in item.childrens" :key="ii">
                                <nuxt-link :to="child.url">
                                    {{ child.text }}
                                </nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
</template>
<script>
export default {
    data() {
        return {
            show: false,
            activeId: null,
            menu: this.$store.state.settings.sections.header.menu
        }
    },
    watch: {
        "$store.state.showHeaderMenu"(val){
            this.$nextTick(() => {
                this.show = val;
            });
        },
        show(val){
            setTimeout(() => {
                this.$store.state.showHeaderMenu = val;
            }, 1000);
        }
    }
}
</script>
<style>
.menu-container{
    transform: translateX(-40rem);
}
.menu-container-in{
    transform: translateX(-20rem);
}
</style>