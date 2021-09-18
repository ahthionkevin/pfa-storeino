<template>
    <div class="py-2 relative" @mouseleave="activeItem=null">
        <div class="bg-gray-200">
            <div class="container">
                <ul class="flex">
                    <li v-for="(item, i) in menu.items" :key="i" @mouseenter="activeItem=item">
                        <router-link class="p-2 mx-1 hover:bg-gray-50 hover:text-green-700 flex" :to="item.url">{{ item.text }}</router-link>
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
                    ]
            }
        }
    },
}
</script>