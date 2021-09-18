<template>
  <div class="bg-white">
      <div class="flex flex-wrap justify-start container">
        <div v-for="(item,i) in menu.items" :key="i" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div class="p-2 h-full border-l border-r">
                <h4 class="text-xl font-bold menu-title px-2">
                    <router-link :to="item.url">{{item.text}}</router-link>
                </h4>
                <ul class="p-2" v-if="item.childrens && item.childrens.length > 0">
                    <li v-for="(child,ii) in item.childrens" :key="ii">
                        <nuxt-link :to="child.url" class="submenu-title">
                            {{ child.text }}
                        </nuxt-link>
                        <ul class="p-2 rounded-md bg-gray-100" v-if="child.childrens && child.childrens.length > 0">
                            <li v-for="(child2,iii) in child.childrens" :key="iii">
                                <nuxt-link :to="child2.url" class="subsubmenu-title">
                                    {{ child2.text }}
                                </nuxt-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menu: {
        items: [
          {
            target: "_self",
            childrens: [
              {
                text: "headphones",
                url: "/shop/headphones",
                target: "_self",
                collectionId: "611d7334af093e19cef7d73f",
                childrens: [],
              },
              {
                text: "Phones",
                url: "/shop/phones",
                target: "_self",
                collectionId: "611d7326af093e19cef7d736",
                childrens: [],
              },
            ],
            _id: "6152f5462d03a91d18898c6d",
            text: "Smart",
            url: "/shop/smart",
            collectionId: "611d7439af093e19cef7d7b1",
          },
          {
            target: "_self",
            childrens: [
              {
                text: "Computers",
                url: "/shop/computers",
                target: "_self",
                collectionId: "611d73f5af093e19cef7d7a9",
                childrens: [
                    {
                        text: "headphones",
                        url: "/shop/headphones",
                        target: "_self",
                        collectionId: "611d7334af093e19cef7d73f",
                        childrens: [],
                    },
                    {
                        text: "Phones",
                        url: "/shop/phones",
                        target: "_self",
                        collectionId: "611d7326af093e19cef7d736",
                        childrens: [],
                    },
                ],
              },
              {
                text: "Glasses",
                url: "/shop/glasses",
                target: "_self",
                collectionId: "611d73b4af093e19cef7d77f",
                childrens: [],
              },
            ],
            _id: "6152f5462d03a91d18898c6e",
            text: "Bluetooth",
            url: "/shop/bluetooth",
            collectionId: "611d737caf093e19cef7d757",
          },
          {
            target: "_self",
            childrens: [
              {
                text: "Phones",
                url: "/shop/phones",
                target: "_self",
                collectionId: "611d7326af093e19cef7d736",
                childrens: [],
              },
              {
                text: "Smart",
                url: "/shop/smart",
                target: "_self",
                collectionId: "611d7439af093e19cef7d7b1",
                childrens: [],
              },
            ],
            _id: "6152f5462d03a91d18898c6f",
            text: "Glasses",
            url: "/shop/glasses",
            collectionId: "611d73b4af093e19cef7d77f",
          },
          {
            target: "_self",
            childrens: [
              {
                text: "Computers",
                url: "/shop/computers",
                target: "_self",
                collectionId: "611d73f5af093e19cef7d7a9",
                childrens: [],
              },
              {
                text: "Glasses",
                url: "/shop/glasses",
                target: "_self",
                collectionId: "611d73b4af093e19cef7d77f",
                childrens: [],
              },
            ],
            _id: "6152f5462d03a91d18898c70",
            text: "headphones",
            url: "/shop/headphones",
            collectionId: "611d7334af093e19cef7d73f",
          },
          {
            target: "_self",
            childrens: [
              {
                text: "Computers",
                url: "/shop/computers",
                target: "_self",
                collectionId: "611d73f5af093e19cef7d7a9",
                childrens: [],
              },
              {
                text: "Computers",
                url: "/shop/computers",
                target: "_self",
                collectionId: "611d73f5af093e19cef7d7a9",
                childrens: [],
              },
            ],
            _id: "6152f5462d03a91d18898c71",
            text: "Bluetooth",
            url: "/shop/bluetooth",
            collectionId: "611d737caf093e19cef7d757",
          },
          {
            target: "_self",
            childrens: [],
            _id: "6152f5462d03a91d18898c72",
            text: "Glasses",
            url: "/shop/glasses",
            collectionId: "611d73b4af093e19cef7d77f",
          },
          {
            target: "_self",
            childrens: [
              {
                text: "headphones",
                url: "/shop/headphones",
                target: "_self",
                collectionId: "611d7334af093e19cef7d73f",
                childrens: [],
              },
            ],
            _id: "6152f5462d03a91d18898c73",
            text: "Smart",
            url: "/shop/smart",
            collectionId: "611d7439af093e19cef7d7b1",
          },
          {
            target: "_self",
            childrens: [],
            _id: "6152f5462d03a91d18898c74",
            text: "Phones",
            url: "/shop/phones",
            collectionId: "611d7326af093e19cef7d736",
          },
        ],
      },
    };
  },
};
</script>
<style>
    .menu-title{
        border-left: 4px solid var(--primary-color);
        /* background-color: rgba(var(--primary-rgb), 0.1); */
    }
</style>