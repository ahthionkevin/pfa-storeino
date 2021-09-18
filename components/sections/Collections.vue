<template>
  <div class="container">
    <div class="m-2">
      <h2 class="text-2xl">{{ "Top collections" }}</h2>
    </div>
    <div class="flex flex-wrap">
      <div v-for="(item,i) in items" :key="i" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
        <si-collection :item="item"></si-collection>
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
          image: {
            title: "image",
            _id: "611d7965af093e19cef7dacc",
            src: "https://storeno.b-cdn.net/stores/8-2021/1629321573307.jpeg",
          },
          parent: null,
          childrens: [],
          _id: "611d737caf093e19cef7d757",
          name: "Bluetooth",
          slug: "bluetooth",
          description: "",
          translates: [],
          storeId: "611d702e23de571fb9b97d94",
          __v: 0,
        },
        {
          /* image: {
            title: "image",
            _id: "611d7a4eaf093e19cef7dbce",
            src: "https://storeno.b-cdn.net/stores/8-2021/1629321806390.jpeg",
          }, */
          parent: null,
          childrens: [],
          _id: "611d73f5af093e19cef7d7a9",
          name: "Computers",
          slug: "computers",
          description: "",
          translates: [],
          storeId: "611d702e23de571fb9b97d94",
          __v: 0,
        },
        {
          image: {
            title: "image",
            _id: "611d7a03af093e19cef7dbbf",
            src: "https://storeno.b-cdn.net/stores/8-2021/1629321731162.webp",
          },
          parent: null,
          childrens: [],
          _id: "611d73b4af093e19cef7d77f",
          name: "Glasses",
          slug: "glasses",
          description: "",
          translates: [],
          storeId: "611d702e23de571fb9b97d94",
          __v: 0,
        },
        {
          image: {
            title: "image",
            _id: "611d78a5af093e19cef7d9f6",
            src: "https://storeno.b-cdn.net/stores/8-2021/1629321381575.webp",
          },
          parent: null,
          childrens: [],
          _id: "611d7334af093e19cef7d73f",
          name: "headphones",
          slug: "headphones",
          description: "",
          translates: [],
          storeId: "611d702e23de571fb9b97d94",
          __v: 0,
        },
      ],
    };
  },
};
</script>