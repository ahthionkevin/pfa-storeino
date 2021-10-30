import StoreinoApp from 'vue/dist/vue.common.prod';
export default async function ({ $axios, $http, $tools, $storeino, store, app, redirect }, inject) {
    if(process.server) {
        const req = app.context.req;
        // Set Currency and language
        
        // Get Template settings
        
        // Set current domain
        store.state.domain = req.headers.host;
        const params = { lang: store.state.language.code, cur: store.state.currency.code }
        try {
            let response = null
            if(req.body && req.body.preview){
                const body = { data: JSON.parse(req.body.preview.data), schema: JSON.parse(req.body.preview.schema) };
                response = await $http.post('/settings/current', body ,{ params });
            }else{
               response = await $http.get('/settings/current', { params });
            }
            store.state.settings = response.data;
        } catch (error) {
            console.log({ error });
            if(error.response) throw "ERROR :: " + error.response.data;
            throw "ERROR :: INVALID TOKEN" + error;
        }
        // init Cart
        let cookies = $tools.cookieToObject(req.headers.cookie);
        const STOREINO_CART = cookies['STOREINO-CART'] ? cookies['STOREINO-CART'] : '[]';
        store.state.cart = JSON.parse(STOREINO_CART);
        // init Wishlist
        const STOREINO_WISHLIST = cookies['STOREINO-WISHLIST'] ? cookies['STOREINO-WISHLIST'] : '[]';
        store.state.wishlist = JSON.parse(STOREINO_WISHLIST);
        // Sentry Log

        // Events


        // Default apps
        try {
            store.state.apps = [];
            const response =  await $storeino.apps.search({only: ['name', 'route', 'placement', 'config']});
            const names = response.data.results.map(app => app.route);
            const { data: objects } = await $http.get('https://appstatic.storeino.com/all/store', { params: { names } });
            for (const app of response.data.results) {
                const loaded = objects.find(object => object.name === app.route);
                app.loaded = loaded;
                store.state.apps.push(app);
            }
        } catch (error) {
            console.log("Apps not loaded");
        }
    }else{
        StoreinoApp.$store = {
            search: async function (module, params) {
              let response = await $http.get(`/${module}/search`, { params });
              return response.data;
            },
            get: async function (module, params) {
              let response = await $http.get(`/${module}/get`, { params });
              return response.data;
            },
            create: async function (module, params, data) {
              let response = await $http.post(`/${module}/create`, data, { params });
              return response.data;
            },
            update: async function (module, params, data) {
              let response = await $http.post(`/${module}/update`, data, { params });
              return response.data;
            }
          };
          window.StoreinoApp = StoreinoApp;
    }
    inject('settings', store.state.settings);
}