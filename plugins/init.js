export default async function ({ $axios, $http, $tools, store, app, redirect }, inject) {
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
    }
    inject('settings', store.state.settings);
}