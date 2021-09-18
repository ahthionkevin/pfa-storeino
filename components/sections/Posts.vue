<template>
  <div class="container">
    <div class="m-2">
      <h2 class="text-2xl">{{ "Our Activites" }}</h2>
    </div>
    <div class="flex flex-wrap">
      <div v-for="(item, i) in items" :key="i" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-2">
        <si-post :item="item"></si-post>
      </div>
    </div>
    <div class="flex justify-center">
      <nuxt-link class="py-2 px-4 w-full mx-2 bg-primary text-white flex items-center" to="/blog">
        <span class="w-full">{{ 'Show more activites' }}</span>
        <svg class="h-4" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" x="0" y="0" viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 512 512" xml:space="preserve"><g> <g xmlns="http://www.w3.org/2000/svg"> <g> <path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z" fill="#ffffff" data-original="#000000" style="" class=""></path> </g> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> </g></svg>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            items: [
                {
                    image: {
                    url: "https://storeno.b-cdn.net/stores/8-2021/1629324402666.jpeg",
                    alt: "image"
                    },
                    publisher: {
                    role: {
                        name: "admin",
                        _id: "611d7030af093e19cef7d5c3"
                    },
                    _id: "5fdb82158095db00d7780886",
                    firstname: "storeino",
                    lastname: "developer"
                    },
                    status: "DRAFT",
                    type: "POST",
                    tags: [],
                    _id: "611d847aaf093e19cef7e19e",
                    title: "Black Friday In Yellow",
                    slug: "black-friday-in-yellow",
                    excerpt: "Black Friday In Yellow",
                    content: "<p>Black Friday In Yellow</p>",
                    categories: [],
                    translates: [],
                    storeId: "611d702e23de571fb9b97d94",
                    createdAt: "2021-08-18T22:06:50.882Z",
                    updatedAt: "2021-08-18T22:06:50.882Z",
                    __v: 0
                },
                {
                    image: {
                    url: "https://storeno.b-cdn.net/stores/8-2021/1629324281898.jpeg",
                    alt: "image"
                    },
                    publisher: {
                    role: {
                        name: "admin",
                        _id: "611d7030af093e19cef7d5c3"
                    },
                    _id: "5fdb82158095db00d7780886",
                    firstname: "storeino",
                    lastname: "developer"
                    },
                    status: "PUBLISH",
                    type: "POST",
                    tags: [],
                    _id: "611d8414af093e19cef7e171",
                    title: "See life in yellow with Anti-Blu-ray",
                    slug: "see-life-in-yellow-with-anti-blu-ray",
                    excerpt: "See life in yellow with Anti-Blu-ray",
                    content: "<p>See life in yellow with Anti-Blu-ray</p>",
                    categories: [],
                    translates: [],
                    storeId: "611d702e23de571fb9b97d94",
                    createdAt: "2021-08-18T22:05:08.884Z",
                    updatedAt: "2021-08-18T22:05:08.884Z",
                    __v: 0
                },
                {
                    image: {
                    url: "https://storeno.b-cdn.net/stores/8-2021/1629324081847.jpeg",
                    alt: "image"
                    },
                    publisher: {
                    role: {
                        name: "admin",
                        _id: "611d7030af093e19cef7d5c3"
                    },
                    _id: "5fdb82158095db00d7780886",
                    firstname: "storeino",
                    lastname: "developer"
                    },
                    status: "PUBLISH",
                    type: "POST",
                    tags: [],
                    _id: "611d8393af093e19cef7e13f",
                    title: "Yellow clothes - All you need to know",
                    slug: "yellow-clothes---all-you-need-to-know",
                    excerpt: "Yellow clothes - All you need to know",
                    content: "<p>Yellow clothes - All you need to know</p>",
                    categories: [],
                    translates: [],
                    storeId: "611d702e23de571fb9b97d94",
                    createdAt: "2021-08-18T22:02:59.518Z",
                    updatedAt: "2021-08-18T22:03:03.893Z",
                    __v: 0
                }
            ]
        }
    },
}
</script>