<template>
  <div class="container">
    <div class="m-2">
      <h2 class="text-2xl">{{ "Featured products" }}</h2>
    </div>
    <div class="flex flex-wrap">
      <div v-for="(item, i) in items" :key="i" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
        <si-product :item="item"></si-product>
      </div>
    </div>
    <div class="flex justify-center">
      <nuxt-link class="py-2 px-4 w-full mx-2 bg-primary text-white flex items-center" to="/shop">
        <span class="w-full">{{ 'Show more products' }}</span>
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
          user: {
            _id: "5fdb82158095db00d7780886",
            firstname: "storeino",
            lastname: "developer",
          },
          seo: {
            hide: false,
            keywords: [],
            description: "",
            title: "Lightweight Metal Bass 3.5mm In-Ear Earphone",
          },
          price: {
            buyingPrice: 190,
            salePrice: 200,
            comparePrice: 240,
          },
          quantity: {
            instock: 10000,
            transporting: 0,
            unit: "",
            increment: 1,
            default: 1,
            min: 1,
          },
          outStock: {
            hide: false,
            disabled: true,
          },
          sizes: {
            weight: {
              value: 0,
              unit: "kg",
            },
            volume: {
              value: 0,
              unit: "ml",
            },
            dimensions: {
              width: 0,
              height: 0,
              depth: 0,
              unit: "cm",
            },
          },
          shipping: {
            active: false,
            price: 0,
            zones: [],
          },
          review: {
            reviews: [],
            rating: 4,
          },
          html: "",
          type: "simple",
          tags: ["phone"],
          status: "PUBLISH",
          _id: "611d77e3af093e19cef7d9c5",
          description: "",
          slug: "lightweight-metal-bass-3-5mm-in-ear-earphone",
          reference: "M1JJD1069449137433",
          collections: [
            {
              _id: "611d7334af093e19cef7d73f",
              name: "headphones",
              slug: "headphones",
            },
          ],
          name: "Lightweight Metal Bass 3.5mm In-Ear Earphone",
          options: [],
          variants: [],
          images: [
            {
              title: "image",
              width: 0,
              height: 0,
              _id: "611d77b7af093e19cef7d9b3",
              src: "https://storeno.b-cdn.net/stores/8-2021/1629321143764.jpeg",
              storeId: "611d702e23de571fb9b97d94",
              createdAt: "2021-08-18T21:13:07.539Z",
              updatedAt: "2021-08-18T21:13:07.539Z",
            },
          ],
          files: [],
          translates: [],
          currencies: [],
          storeId: "611d702e23de571fb9b97d94",
          createdAt: "2021-08-18T21:13:07.539Z",
        },
        {
          user: {
              _id: "5fdb82158095db00d7780886",
              firstname: "storeino",
              lastname: "developer"
          },
          seo: {
              hide: false,
              keywords: [],
              description: "",
              title: "Variable product"
          },
          price: {
              buyingPrice: 0,
              salePrice: 0,
              comparePrice: 0
          },
          quantity: {
              instock: 100,
              transporting: 0,
              unit: "",
              increment: 1.25,
              default: 1.25,
              min: 1.25
          },
          outStock: {
              hide: false,
              disabled: true
          },
          sizes: {
              weight: {
                  value: 0,
                  unit: "kg"
              },
              volume: {
                  value: 0,
                  unit: "ml"
              },
              dimensions: {
                  width: 0,
                  height: 0,
                  depth: 0,
                  unit: "cm"
              }
          },
          shipping: {
              active: false,
              price: 0,
              zones: []
          },
          review: {
              reviews: [],
              rating: 0
          },
          html: "<p>This is the description</p><p><img src=\"https://storeino.b-cdn.net/u/update/p/09032020195908641494567.jpg\"><img src=\"https://storeino.b-cdn.net/u/update/p/090320202017004553783.png\"><img src=\"https://storeino.b-cdn.net/u/update/p/090320202019511685262184.png\"><img src=\"https://storeino.b-cdn.net/u/update/p/090320202020115428440.jpg\"><img src=\"https://storeino.b-cdn.net/u/update/p/090320202018061107839626.jpeg\"><br><img src=\"https://storeino.b-cdn.net/u/update/p/09032020201214915026831.jpg\"></p>",
          type: "variable",
          tags: [],
          status: "PUBLISH",
          _id: "60bab14f1b23b90da5d4fb0c",
          options: [
              {
                  values: [
                      {
                          value1: "orange",
                          value2: "#ff8000",
                          _id: "60bab14f1b23b90da5d4fb11"
                      },
                      {
                          value1: "bleu",
                          value2: "#0000ff",
                          _id: "60bab14f1b23b90da5d4fb18"
                      }
                  ],
                  _id: "60bab14f1b23b90da5d4fb0d",
                  name: "collor",
                  key: "color",
                  position: 1
              },
              {
                  values: [
                      {
                          value1: "XL",
                          value2: "XL",
                          _id: "60bab14f1b23b90da5d4fb12"
                      },
                      {
                          value1: "XXL",
                          value2: "XXL",
                          _id: "60bab14f1b23b90da5d4fb14"
                      },
                      {
                          value1: "M",
                          value2: "M",
                          _id: "60bab14f1b23b90da5d4fb16"
                      }
                  ],
                  _id: "60bab14f1b23b90da5d4fb0e",
                  name: "size",
                  key: "size",
                  position: 1
              }
          ],
          variants: [
              {
                  option1: {
                      option: "60bab14f1b23b90da5d4fb0d",
                      value: "60bab14f1b23b90da5d4fb11"
                  },
                  option2: {
                      option: "60bab14f1b23b90da5d4fb0e",
                      value: "60bab14f1b23b90da5d4fb12"
                  },
                  price: {
                      buyingPrice: 300,
                      salePrice: 400,
                      comparePrice: 520
                  },
                  quantity: {
                      instock: 10000,
                      transporting: 0
                  },
                  sizes: {
                      weight: {
                          value: 0,
                          unite: "kg"
                      },
                      volume: {
                          value: 0,
                          unite: "ml"
                      },
                      dimensions: {
                          width: 0,
                          height: 0,
                          depth: 0,
                          unite: "cm"
                      }
                  },
                  unavailable: false,
                  translates: [],
                  _id: "60bab14f1b23b90da5d4fb13",
                  name: "orange - XL"
              },
              {
                  option1: {
                      option: "60bab14f1b23b90da5d4fb0d",
                      value: "60bab14f1b23b90da5d4fb11"
                  },
                  option2: {
                      option: "60bab14f1b23b90da5d4fb0e",
                      value: "60bab14f1b23b90da5d4fb14"
                  },
                  price: {
                      buyingPrice: 300,
                      salePrice: 400,
                      comparePrice: 520
                  },
                  quantity: {
                      instock: 10000,
                      transporting: 0
                  },
                  sizes: {
                      weight: {
                          value: 0,
                          unite: "kg"
                      },
                      volume: {
                          value: 0,
                          unite: "ml"
                      },
                      dimensions: {
                          width: 0,
                          height: 0,
                          depth: 0,
                          unite: "cm"
                      }
                  },
                  unavailable: false,
                  translates: [],
                  _id: "60bab14f1b23b90da5d4fb15",
                  name: "orange - XXL"
              },
              {
                  option1: {
                      option: "60bab14f1b23b90da5d4fb0d",
                      value: "60bab14f1b23b90da5d4fb11"
                  },
                  option2: {
                      option: "60bab14f1b23b90da5d4fb0e",
                      value: "60bab14f1b23b90da5d4fb16"
                  },
                  price: {
                      buyingPrice: 300,
                      salePrice: 400,
                      comparePrice: 520
                  },
                  quantity: {
                      instock: 10000,
                      transporting: 0
                  },
                  sizes: {
                      weight: {
                          value: 0,
                          unite: "kg"
                      },
                      volume: {
                          value: 0,
                          unite: "ml"
                      },
                      dimensions: {
                          width: 0,
                          height: 0,
                          depth: 0,
                          unite: "cm"
                      }
                  },
                  unavailable: false,
                  translates: [],
                  _id: "60bab14f1b23b90da5d4fb17",
                  name: "orange - M"
              },
              {
                  option1: {
                      option: "60bab14f1b23b90da5d4fb0d",
                      value: "60bab14f1b23b90da5d4fb18"
                  },
                  option2: {
                      option: "60bab14f1b23b90da5d4fb0e",
                      value: "60bab14f1b23b90da5d4fb12"
                  },
                  price: {
                      buyingPrice: 300,
                      salePrice: 400,
                      comparePrice: 520
                  },
                  quantity: {
                      instock: 10000,
                      transporting: 0
                  },
                  sizes: {
                      weight: {
                          value: 0,
                          unite: "kg"
                      },
                      volume: {
                          value: 0,
                          unite: "ml"
                      },
                      dimensions: {
                          width: 0,
                          height: 0,
                          depth: 0,
                          unite: "cm"
                      }
                  },
                  unavailable: false,
                  translates: [],
                  _id: "60bab14f1b23b90da5d4fb19",
                  name: "bleu - XL"
              },
              {
                  option1: {
                      option: "60bab14f1b23b90da5d4fb0d",
                      value: "60bab14f1b23b90da5d4fb18"
                  },
                  option2: {
                      option: "60bab14f1b23b90da5d4fb0e",
                      value: "60bab14f1b23b90da5d4fb14"
                  },
                  price: {
                      buyingPrice: 300,
                      salePrice: 400,
                      comparePrice: 520
                  },
                  quantity: {
                      instock: 10000,
                      transporting: 0
                  },
                  sizes: {
                      weight: {
                          value: 0,
                          unite: "kg"
                      },
                      volume: {
                          value: 0,
                          unite: "ml"
                      },
                      dimensions: {
                          width: 0,
                          height: 0,
                          depth: 0,
                          unite: "cm"
                      }
                  },
                  unavailable: false,
                  translates: [],
                  _id: "60bab14f1b23b90da5d4fb1a",
                  name: "bleu - XXL"
              },
              {
                  option1: {
                      option: "60bab14f1b23b90da5d4fb0d",
                      value: "60bab14f1b23b90da5d4fb18"
                  },
                  option2: {
                      option: "60bab14f1b23b90da5d4fb0e",
                      value: "60bab14f1b23b90da5d4fb16"
                  },
                  price: {
                      buyingPrice: 300,
                      salePrice: 400,
                      comparePrice: 520
                  },
                  quantity: {
                      instock: 10000,
                      transporting: 0
                  },
                  sizes: {
                      weight: {
                          value: 0,
                          unite: "kg"
                      },
                      volume: {
                          value: 0,
                          unite: "ml"
                      },
                      dimensions: {
                          width: 0,
                          height: 0,
                          depth: 0,
                          unite: "cm"
                      }
                  },
                  unavailable: false,
                  translates: [],
                  _id: "60bab14f1b23b90da5d4fb1b",
                  name: "bleu - M"
              }
          ],
          description: "",
          slug: "product-with-new-upload-21",
          reference: "P1622847823066",
          collections: [],
          name: "Variable product",
          images: [
              {
                  title: "Product with new upload",
                  width: 0,
                  height: 0,
                  _id: "60bab14b1b23b90da5d4fa50",
                  src: "https://storeino.b-cdn.net/u/update/p/09032020180619665809068.jpg",
                  storeId: "60095ae1afb4e609a56cd18f",
                  updatedAt: "2021-09-27T10:28:39.337Z",
                  createdAt: "2021-09-27T10:28:39.337Z"
              },
              {
                  title: "Product with new upload",
                  width: 0,
                  height: 0,
                  _id: "60bab14b1b23b90da5d4fa52",
                  src: "https://storeino.b-cdn.net/u/update/p/09032020190158896363966.png",
                  storeId: "60095ae1afb4e609a56cd18f",
                  updatedAt: "2021-09-27T10:28:39.337Z",
                  createdAt: "2021-09-27T10:28:39.337Z"
              }
          ],
          storeId: "60095ae1afb4e609a56cd18f",
          files: [],
          translates: [
              {
                  properties: [
                      {
                          _id: "61519cd74e550c1c972b2be8",
                          name: "variants.0.name",
                          value: "orange - XL"
                      },
                      {
                          _id: "61519cd74e550c1c972b2be9",
                          name: "variants.1.name",
                          value: "orange - XXL"
                      },
                      {
                          _id: "61519cd74e550c1c972b2bea",
                          name: "variants.2.name",
                          value: "orange - M"
                      },
                      {
                          _id: "61519cd74e550c1c972b2beb",
                          name: "variants.3.name",
                          value: "bleu - XL"
                      },
                      {
                          _id: "61519cd74e550c1c972b2bec",
                          name: "variants.4.name",
                          value: "bleu - XXL"
                      },
                      {
                          _id: "61519cd74e550c1c972b2bed",
                          name: "variants.5.name",
                          value: "bleu - M"
                      },
                      {
                          _id: "61519cd74e550c1c972b2bee",
                          name: "options.0.name",
                          value: "collor"
                      },
                      {
                          _id: "61519cd74e550c1c972b2bef",
                          name: "options.0.values.0.value1",
                          value: "orange"
                      },
                      {
                          _id: "61519cd74e550c1c972b2bf0",
                          name: "options.0.values.1.value1",
                          value: "bleu"
                      },
                      {
                          _id: "61519cd74e550c1c972b2bf1",
                          name: "options.1.name",
                          value: "size"
                      },
                      {
                          _id: "61519cd74e550c1c972b2bf2",
                          name: "options.1.values.0.value1",
                          value: "XL"
                      },
                      {
                          _id: "61519cd74e550c1c972b2bf3",
                          name: "options.1.values.1.value1",
                          value: "XXL"
                      },
                      {
                          _id: "61519cd74e550c1c972b2bf4",
                          name: "options.1.values.2.value1",
                          value: "M"
                      }
                  ],
                  _id: "61519cd74e550c1c972b2be7",
                  language: "FR"
              }
          ],
          currencies: [
              {
                  properties: [
                      {
                          _id: "61519cd74e550c1c972b2be4",
                          name: "price.buyingPrice",
                          value: "0"
                      },
                      {
                          _id: "61519cd74e550c1c972b2be5",
                          name: "price.salePrice",
                          value: "0"
                      },
                      {
                          _id: "61519cd74e550c1c972b2be6",
                          name: "price.comparePrice",
                          value: "0"
                      }
                  ],
                  _id: "61519cd74e550c1c972b2be3",
                  currency: "MAD"
              }
          ],
          createdAt: "2021-06-04T23:03:43.087Z",
          updatedAt: "2021-09-27T10:28:39.337Z",
          __v: 0
      },
        {
          user: {
            _id: "5fdb82158095db00d7780886",
            firstname: "storeino",
            lastname: "developer",
          },
          seo: {
            hide: false,
            keywords: [],
            description: "",
            title: "HD 1080P MINI BODY CAMERA - Smart Camera",
          },
          price: {
            buyingPrice: 100,
            salePrice: 1200,
            comparePrice: 1300,
          },
          quantity: {
            instock: 10000,
            transporting: 0,
            unit: "",
            increment: 1,
            default: 1,
            min: 1,
          },
          outStock: {
            hide: false,
            disabled: true,
          },
          sizes: {
            weight: {
              value: 0,
              unit: "kg",
            },
            volume: {
              value: 0,
              unit: "ml",
            },
            dimensions: {
              width: 0,
              height: 0,
              depth: 0,
              unit: "cm",
            },
          },
          shipping: {
            active: false,
            price: 0,
            zones: [],
          },
          review: {
            reviews: [],
            rating: 3.5,
          },
          html: "",
          type: "simple",
          tags: ["smart"],
          status: "PUBLISH",
          _id: "611d7739af093e19cef7d973",
          description: "",
          slug: "hd-1080p-mini-body-camera---smart-camera",
          reference: "3PEIN1069448963022",
          collections: [
            {
              _id: "611d7439af093e19cef7d7b1",
              name: "Smart",
              slug: "smart",
            },
          ],
          name: "HD 1080P MINI BODY CAMERA - Smart Camera",
          options: [],
          variants: [],
          images: [
            {
              title: "image",
              width: 0,
              height: 0,
              _id: "611d770baf093e19cef7d961",
              src: "https://storeno.b-cdn.net/stores/8-2021/1629320971790.jpeg",
              storeId: "611d702e23de571fb9b97d94",
              createdAt: "2021-08-18T21:10:17.653Z",
              updatedAt: "2021-08-18T21:10:17.653Z",
            },
          ],
          files: [],
          translates: [],
          currencies: [],
          storeId: "611d702e23de571fb9b97d94",
          createdAt: "2021-08-18T21:10:17.653Z",
        },
        {
          user: {
            _id: "5fdb82158095db00d7780886",
            firstname: "storeino",
            lastname: "developer",
          },
          seo: {
            hide: false,
            keywords: [],
            description: "",
            title: "LDFAS Wireless Charger Stand, 3 in 1 Fast",
          },
          price: {
            buyingPrice: 300,
            salePrice: 400,
            comparePrice: 450,
          },
          quantity: {
            instock: 10000,
            transporting: 0,
            unit: "",
            increment: 1,
            default: 1,
            min: 1,
          },
          outStock: {
            hide: false,
            disabled: true,
          },
          sizes: {
            weight: {
              value: 0,
              unit: "kg",
            },
            volume: {
              value: 0,
              unit: "ml",
            },
            dimensions: {
              width: 0,
              height: 0,
              depth: 0,
              unit: "cm",
            },
          },
          shipping: {
            active: false,
            price: 0,
            zones: [],
          },
          review: {
            reviews: [],
            rating: 2,
          },
          html: "",
          type: "simple",
          tags: ["phone"],
          status: "PUBLISH",
          _id: "611d7689af093e19cef7d938",
          description: "",
          slug: "ldfas-wireless-charger-stand--3-in-1-fast",
          reference: "KQVRK1069448810358",
          collections: [
            {
              _id: "611d7326af093e19cef7d736",
              name: "Phones",
              slug: "phones",
            },
          ],
          name: "LDFAS Wireless Charger Stand, 3 in 1 Fast",
          options: [],
          variants: [],
          images: [
            {
              title: "image",
              width: 0,
              height: 0,
              _id: "611d7678af093e19cef7d935",
              src: "https://storeno.b-cdn.net/stores/8-2021/1629320824262.jpeg",
              storeId: "611d702e23de571fb9b97d94",
              createdAt: "2021-08-18T21:07:21.039Z",
              updatedAt: "2021-08-18T21:07:21.039Z",
            },
          ],
          files: [],
          translates: [],
          currencies: [],
          storeId: "611d702e23de571fb9b97d94",
          createdAt: "2021-08-18T21:07:21.039Z",
        },
        {
          user: {
            _id: "5fdb82158095db00d7780886",
            firstname: "storeino",
            lastname: "developer",
          },
          seo: {
            hide: false,
            keywords: [],
            description: "",
            title:
              "BT 5.0 Smart Glasses Bluetooth Square Bone Conduction Sungla",
          },
          price: {
            buyingPrice: 500,
            salePrice: 930,
            comparePrice: 1000,
          },
          quantity: {
            instock: 10000,
            transporting: 0,
            unit: "",
            increment: 1,
            default: 1,
            min: 1,
          },
          outStock: {
            hide: false,
            disabled: true,
          },
          sizes: {
            weight: {
              value: 0,
              unit: "kg",
            },
            volume: {
              value: 0,
              unit: "ml",
            },
            dimensions: {
              width: 0,
              height: 0,
              depth: 0,
              unit: "cm",
            },
          },
          shipping: {
            active: false,
            price: 0,
            zones: [],
          },
          review: {
            reviews: [],
            rating: 5,
          },
          html: "",
          type: "simple",
          tags: ["smart"],
          status: "PUBLISH",
          _id: "611d7582af093e19cef7d835",
          description: "",
          slug: "bt-5-0-smart-glasses-bluetooth-square-bone-conduction-sungla",
          reference: "I3OFC1069448547328",
          collections: [
            {
              _id: "611d7439af093e19cef7d7b1",
              name: "Smart",
              slug: "smart",
            },
          ],
          name: "BT 5.0 Smart Glasses Bluetooth Square Bone Conduction Sungla",
          options: [],
          variants: [],
          images: [
            {
              title: "image",
              width: 0,
              height: 0,
              _id: "611d73afaf093e19cef7d779",
              src: "https://storeno.b-cdn.net/stores/8-2021/1629320111506.jpeg",
              storeId: "611d702e23de571fb9b97d94",
              createdAt: "2021-08-18T21:02:58.479Z",
              updatedAt: "2021-08-18T21:02:58.479Z",
            },
          ],
          files: [],
          translates: [],
          currencies: [],
          storeId: "611d702e23de571fb9b97d94",
          createdAt: "2021-08-18T21:02:58.479Z",
        },
        {
          user: {
            _id: "5fdb82158095db00d7780886",
            firstname: "storeino",
            lastname: "developer",
          },
          seo: {
            hide: false,
            keywords: [],
            description: "",
            title:
              "Logitech em 234 setups gamer! Caixa de som, Combo, Controle",
          },
          price: {
            buyingPrice: 300,
            salePrice: 420,
            comparePrice: 490,
          },
          quantity: {
            instock: 10000,
            transporting: 0,
            unit: "",
            increment: 1,
            default: 1,
            min: 1,
          },
          outStock: {
            hide: false,
            disabled: true,
          },
          sizes: {
            weight: {
              value: 0,
              unit: "kg",
            },
            volume: {
              value: 0,
              unit: "ml",
            },
            dimensions: {
              width: 0,
              height: 0,
              depth: 0,
              unit: "cm",
            },
          },
          shipping: {
            active: false,
            price: 0,
            zones: [],
          },
          review: {
            reviews: [],
            rating: 0,
          },
          html: "",
          type: "simple",
          tags: ["smart", "computer"],
          status: "PUBLISH",
          _id: "611d74d4af093e19cef7d7cc",
          description: "",
          slug: "logitech-em-234-setups-gamer--caixa-de-som--combo--controle",
          reference: "TSYFV1069448310000",
          collections: [
            {
              _id: "611d73f5af093e19cef7d7a9",
              name: "Computers",
              slug: "computers",
            },
          ],
          name: "Logitech em 234 setups gamer! Caixa de som, Combo, Controle",
          options: [],
          variants: [],
          images: [
            {
              title: "image",
              width: 0,
              height: 0,
              _id: "611d74baaf093e19cef7d7ca",
              src: "https://storeno.b-cdn.net/stores/8-2021/1629320378653.jpeg",
              storeId: "611d702e23de571fb9b97d94",
              createdAt: "2021-08-18T21:00:04.356Z",
              updatedAt: "2021-08-18T21:00:04.356Z",
            },
          ],
          files: [],
          translates: [],
          currencies: [],
          storeId: "611d702e23de571fb9b97d94",
          createdAt: "2021-08-18T21:00:04.356Z",
        },
        {
          user: {
            _id: "5fdb82158095db00d7780886",
            firstname: "storeino",
            lastname: "developer",
          },
          seo: {
            hide: false,
            keywords: [],
            description: "",
            title:
              "Lampu Pintar Kini Makin Populer, Benarkah Bisa Menghemat Bia",
          },
          price: {
            buyingPrice: 300,
            salePrice: 320,
            comparePrice: 370,
          },
          quantity: {
            instock: 10000,
            transporting: 0,
            unit: "",
            increment: 1,
            default: 1,
            min: 1,
          },
          outStock: {
            hide: false,
            disabled: true,
          },
          sizes: {
            weight: {
              value: 0,
              unit: "kg",
            },
            volume: {
              value: 0,
              unit: "ml",
            },
            dimensions: {
              width: 0,
              height: 0,
              depth: 0,
              unit: "cm",
            },
          },
          shipping: {
            active: false,
            price: 0,
            zones: [],
          },
          review: {
            reviews: [],
            rating: 0,
          },
          html: "",
          type: "simple",
          tags: ["smart"],
          status: "PUBLISH",
          _id: "611d7470af093e19cef7d7b8",
          description: "",
          slug: "lampu-pintar-kini-makin-populer--benarkah-bisa-menghemat-bia",
          reference: "6WD4O1069448273985",
          collections: [
            {
              _id: "611d7439af093e19cef7d7b1",
              name: "Smart",
              slug: "smart",
            },
          ],
          name: "Lampu Pintar Kini Makin Populer, Benarkah Bisa Menghemat Bia",
          options: [],
          variants: [],
          images: [
            {
              title: "image",
              width: 0,
              height: 0,
              _id: "611d7437af093e19cef7d7af",
              src: "https://storeno.b-cdn.net/stores/8-2021/1629320246159.jpeg",
              storeId: "611d702e23de571fb9b97d94",
              createdAt: "2021-08-18T20:58:24.213Z",
              updatedAt: "2021-08-18T20:58:24.213Z",
            },
          ],
          files: [],
          translates: [],
          currencies: [],
          storeId: "611d702e23de571fb9b97d94",
          createdAt: "2021-08-18T20:58:24.214Z",
        },
        {
          user: {
            _id: "5fdb82158095db00d7780886",
            firstname: "storeino",
            lastname: "developer",
          },
          seo: {
            hide: false,
            keywords: [],
            description: "",
            title:
              "Cep Telefonu - GENERAL MOBILE - Elden Senetle General Mobile",
          },
          price: {
            buyingPrice: 1000,
            salePrice: 1200,
            comparePrice: 1500,
          },
          quantity: {
            instock: 10000,
            transporting: 0,
            unit: "",
            increment: 1,
            default: 1,
            min: 1,
          },
          outStock: {
            hide: false,
            disabled: true,
          },
          sizes: {
            weight: {
              value: 0,
              unit: "kg",
            },
            volume: {
              value: 0,
              unit: "ml",
            },
            dimensions: {
              width: 0,
              height: 0,
              depth: 0,
              unit: "cm",
            },
          },
          shipping: {
            active: false,
            price: 0,
            zones: [],
          },
          review: {
            reviews: [],
            rating: 0,
          },
          html: "",
          type: "simple",
          tags: ["phone"],
          status: "PUBLISH",
          _id: "611d7310af093e19cef7d72f",
          description: "",
          slug: "cep-telefonu---general-mobile---elden-senetle-general-mobile",
          reference: "MO5321069447611473",
          collections: [],
          name: "Cep Telefonu - GENERAL MOBILE - Elden Senetle General Mobile",
          options: [],
          variants: [],
          images: [
            {
              title: "image",
              width: 0,
              height: 0,
              _id: "611d7279af093e19cef7d702",
              src: "https://storeno.b-cdn.net/stores/8-2021/1629319800238.jpeg",
              storeId: "611d702e23de571fb9b97d94",
              createdAt: "2021-08-18T20:52:32.393Z",
              updatedAt: "2021-08-18T20:52:32.393Z",
            },
          ],
          files: [],
          translates: [],
          currencies: [],
          storeId: "611d702e23de571fb9b97d94",
          createdAt: "2021-08-18T20:52:32.393Z",
        },
      ],
    };
  },
};
</script>