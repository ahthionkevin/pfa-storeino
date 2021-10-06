import Vuex from 'vuex'
const createStore = () => {
    return new Vuex.Store({ 
      state: ()=>{
        return {
          cart: [],
          whishlist: [],
          settings: null,
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdG9yZSI6eyJfaWQiOiI2MTFkNzAyZTIzZGU1NzFmYjliOTdkOTQifSwiY3VzdG9tZXIiOnsiX2lkIjoiNjExZjBmMmJjYmI4MWUxOWY4ZjJiZDBjIiwiZmlyc3RuYW1lIjoiYW1hbCIsImxhc3RuYW1lIjoiZ3JpZmZpbiIsImVtYWlsIjoiamVsb2NhQG1haWxpbmF0b3IuY29tIn0sImlhdCI6MTYzMzUxODE5NiwiZXhwIjoxNjY1MDU0MTk2fQ.GVDXkbctvIshchvd1aac2em5gocj_JHjhXPMcEd2N9A',
          primary: {
            rgb: { r:0, g:0, b:0 },
            color: '#000000'
          },
          defaults: {
              image: "https://athearoman.com/wp-content/uploads/2016/10/dummy-image.jpg"
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
        }
      },
      actions: ()=>{},
      mutations: ()=>{},
      getters: ()=>{}
    })
  }
export default createStore