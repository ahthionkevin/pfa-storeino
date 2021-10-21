<template>
<div class="flex fixed inset-0 z-20" v-if="show">
    <div v-if="$store.state.showHeaderMenu" :class="$store.state.showHeaderMenu? 'opacity-50' : 'opacity-0'" class="flex transition-all delay-500 fixed inset-0 bg-black" @click="$store.state.showHeaderMenu=false"></div>
    <transition name="slideleft">
        <div :class="$store.state.showHeaderMenu ? 'move-in' : 'move-out'" class="transition-all delay-500 max-w-full relative flex flex-col bg-gray-100 w-80">
            <div class="w-full flex justify-end">
                <button @click="$store.state.showHeaderMenu=false" aria-label="Search button" class="item p-1 bg-gray-100 rounded-md m-1 hover:bg-gray-200">
                    <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-5 h-5"><path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z" class=""></path></svg>
                </button>
            </div>
            <div v-if="menu">
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
        </div>
     </transition>
</div>
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
            if(val){
                this.show = val;
            }else{
                setTimeout(() => {
                    this.show = val;
                },500);
            }
        }
    }
}
</script>
<style>
.move-out{ transform: translateX(-40em); }
.move-in{ transform: translateX(-20em); }
</style>