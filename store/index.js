import Vuex from 'vuex'
const createStore = () => {
    return new Vuex.Store({ 
      state: ()=>{
        return {
          cart: [],
          whishlist: [],
          settings: null,
          domain: 'www.storeino.com',
          apps: [],
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdG9yZSI6eyJfaWQiOiI2MTczZTJmM2EwZDQ3YzQ1OGUyODMyNDMifSwiaWF0IjoxNjM1NDI4NjQ4LCJleHAiOjE2NjY5NjQ2NDh9.3QZXQIYOHZ_39MYRRw1HfXKztu5QBScmNzIzyel50yk',
          primary: {
            rgb: { r:0, g:0, b:0 },
            color: '#000000'
          },
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