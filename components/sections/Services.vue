<template>
<div class="container">
    <div class="flex flex-wrap justify-around py-4">
      <div v-for="(item, i) in items" :key="i" class="p-2">
        <div class="flex flex-col">
            <nuxt-link :to="item.url" class="text-center">
                <si-image width="80" height="80" class="w-20 p-2 h-20 object-cover m-auto opacity-70 " :src="item.image ? item.image.src : null" :alt="item.text"/>
                <b class="p-2">{{ item.text }}</b>
            </nuxt-link>
        </div>
      </div>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            items: [
                {
                    image: { src: 'https://cdn-icons-png.flaticon.com/128/3179/3179078.png' },
                    text: 'Fast delevery',
                    url: '#'
                },
                {
                    image: { src: 'https://cdn-icons-png.flaticon.com/128/3410/3410508.png' },
                    text: 'Satisfaction',
                    url: '#'
                },
                {
                    image: { src: 'https://cdn-icons-png.flaticon.com/128/3190/3190370.png' },
                    text: 'High Quality',
                    url: '#'
                }
            ]
        }
    },
}
</script>