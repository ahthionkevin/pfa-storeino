<template>
    <div class="my-2 relative" @mouseleave="activeItem=null">
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
    </div>
</template>
<script>
export default {
    data() {
        return {
            activeItem: null,
            menu: this.$store.state.settings.sections.header.menu
        }
    }
}
</script>