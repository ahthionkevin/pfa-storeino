import Vuex from 'vuex'
const createStore = () => {
    return new Vuex.Store({ 
      state: ()=>{
        return {
          cart: [],
          whishlist: [],
          settings: null,
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdG9yZSI6eyJfaWQiOiI2MTQ0NDkxNzllNmFkNjA0YTYyODc2ZTAiLCJuYW1lIjoidGVjaG5vIiwic3ViZG9tYWluIjoidGVjaG5vLnN0b3JlaW5vLndvcmxkIn0sInVzZXIiOnsiX2lkIjoiNjA0MGU0OGYyMzY0NzYwYTMyZWUyNTFiIiwiZmlyc3RuYW1lIjoiYWJkZXJyYWhpbSIsImxhc3RuYW1lIjoib3VraHJpYiJ9LCJjb21wYW55Ijp7Il9pZCI6IjYwNDBlNDhmMjM2NDc2MGEzMmVlMjUxOSIsIm5hbWUiOiJva2F5c3MiLCJzdGF0dXMiOiJVTkNPTVBMRVRFRCJ9LCJpYXQiOjE2MzQ3MjUyOTYsImV4cCI6MTYzNTU4OTI5Nn0.0Xl56D1Vk2j89kOB2DO64DT99BSTDysGtSuQkhxXROo',
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
          showHeaderMenu: false
        }
      },
      actions: ()=>{},
      mutations: ()=>{},
      getters: ()=>{}
    })
  }
export default createStore