import Vuex from 'vuex'
const createStore = () => {
    return new Vuex.Store({ 
      state: ()=>{
        return {
          settings: null,
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdG9yZSI6eyJfaWQiOiI2MTFkNzAyZTIzZGU1NzFmYjliOTdkOTQiLCJuYW1lIjoidGVjaG5vIiwic3ViZG9tYWluIjoidGVjaG5vLnN0b3JlaW5vLmNvbSJ9LCJ1c2VyIjp7Il9pZCI6IjVmZGI4MjE1ODA5NWRiMDBkNzc4MDg4NiIsImZpcnN0bmFtZSI6InN0b3JlaW5vIiwibGFzdG5hbWUiOiJkZXZlbG9wZXIifSwiY29tcGFueSI6eyJfaWQiOiI1ZmRiODIxNTgwOTVkYjAwZDc3ODA4ODQiLCJuYW1lIjoiU1RPUkVJTk8gU1lTVEVNIiwic3RhdHVzIjoiYWN0aXZlIn0sImlhdCI6MTYzMjg0NjMwNywiZXhwIjoxNjY0MzgyMzA3fQ.Lvhle9Gu0P67npW5Fvnq_3YYT7dzDFaMbRPqi7HbeAE',
          primary: {
            rgb: { r:0, g:0, b:0 },
            color: '#000000'
          },
          defaults: {
              image: "https://athearoman.com/wp-content/uploads/2016/10/dummy-image.jpg"
          },
          currency: {
            symbol: "DH",
            code: "MAD"
          },
          language: {
            name: "Unknown",
            code: undefined
          },
        }
      },
      actions: ()=>{},
      mutations: ()=>{},
      getters: ()=>{}
    })
  }
export default createStore