import Vuex from 'vuex'
const createStore = () => {
    return new Vuex.Store({ 
      state: ()=>{
        return {
          cart: [],
          whishlist: [],
          seo: {
            title: '',
            description: '',
            keywords: '',
            url: '',
            image: '',
            metaTags: [],
            scripts: [],
          },
          settings: null,
          domain: 'www.storeino.com',
          apps: [],
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdG9yZSI6eyJfaWQiOiI2MTFkNzAyZTIzZGU1NzFmYjliOTdkOTQifSwiaWF0IjoxNjM1NTIxNjc4LCJleHAiOjE2NjcwNTc2Nzh9.miY1bYgeOFh_aJ7E-EoIUu51OGsDIclg6-bBu9zTXm0',
          primary: {
            rgb: { r:0, g:0, b:0 },
            color: '#000000'
          },
          search: '',
          defaults: {
              image: "https://storeno.b-cdn.net/themes/palest/default-shop.jpg",
              logo: ""
          },
          currency: {
            symbol: "DH",
            code: undefined
          },
          language: {
            name: "Unknown",
            code: undefined
          },
          // 
          fullImage: null,
          showHeaderMenu: false
        }
      },
      actions: ()=>{},
      mutations: ()=>{},
      getters: ()=>{}
    })
  }
export default createStore