<template>
    <div class="w-full flex flex-col h-full bg-white shadow">
        <nuxt-link class="flex pb-full relative" :to="`/shop/${item.slug}`">
            <img class="h-full absolute inset-0  object-cover" :src="item.image ? item.image.src : $store.state.defaults.image" alt="" srcset="">
        </nuxt-link>
        <nuxt-link :to="`/shop/${item.slug}`">
            <h3 class="p-2 text-center text-xl">{{ item.name }}</h3>
        </nuxt-link>
    </div>
</template>
<script>
export default {
    props: {
        item: Object
    }
}
</script>