export default async function ({ $http, store, app, route }, inject) {
    const storeino = {};
    // Gets
    const gets = ['products', 'collections' ,'pages'];
    // Searches
    const searches = ['products', 'collections', 'categories', 'upsells' ,'pages', 'brands', 'reviews', 'apps'];
    // Creates and updates
    const creates = []; const updates = [];

    // Functions
    for (const module of gets) {
        if(!storeino[module]) storeino[module] = {};
        storeino[module].get = async function (params) {
            return $http.get(`/${module}/get`, { params });
        };
    }

    for (const module of searches) {
        if(!storeino[module]) storeino[module] = {};
        storeino[module].search = async function (params) {
            return $http.get(`/${module}/search`, { params });
        };
    }

    for (const module of creates) {
        if(!storeino[module]) storeino[module] = {};
        storeino[module].create = async function (params, query) {
            return $http.post(`/${module}/create`, params, { params: query });
        };
    }

    for (const module of updates) {
        if(!storeino[module]) storeino[module] = {};
        storeino[module].update = async function (params, query) {
            return $http.post(`/${module}/update`, params, { params: query });
        };
    }
    // Others
    storeino.products.filters = async function (params) {
        return $http.get('/products/filters', { params });
    }

//   storeino.fbpx = async function (ev, data = {},params = {}) {
//      console.log(`%cFIRE EVENT : ${ev}`, 'color: #2196f3');
//       if(!store.state.isPreview && store.state.settings && store.state.settings['facebook_multiple_pixel'] && store.state.settings['facebook_multiple_pixel'].length > 0){
//         let event_id = 'STORE_'+ Date.now();
//         let params = { name: "fbpx", type: ev, ref: window.location.href, event_id }
//         if (params) { for (const key in params) { params[key] = params[key];} }
//         if (localStorage.getItem('__fbp')) params['user_fbp'] = localStorage.getItem('__fbp');
//         if (localStorage.getItem('__fbc')) params['user_fbc'] = localStorage.getItem('__fbc');
      
//         let exits = false;
//       store.state.settings['facebook_multiple_pixel'].forEach(p => { if (p.active && p.token) exits = true;  });
//       if (exits) {
//         let urlRef = window.location.href;
//         const { data } = await $http.post(`/events/create?name=fbpx&type=${ev}&ref=${urlRef}`,data);
//       }
//     }
//    }
    storeino.fbpx = async function fbpx(ev, data = {},params = {}){
        if (ev == "Purchase" && !route.query.pixel) return 0;
        else if ( ev == "Purchase" && route.query.pixel) {
            let pixelData = JSON.parse(route.query.pixel);
            pixelData.contents.forEach((element) => {
                element.quantity = Math.round(element.quantity);
                delete element._id;
                delete element.variant;
                delete element.name;
            });
            console.log("--- pixel1 ---");
            console.log(data);
            console.log(params);
            data = {
                content_ids: pixelData.content_ids,
                content_type: "product",
                contents: pixelData.contents,
                value: pixelData.total,
                currency: (store.state.currency && store.state.currency.code) ? store.state.currency.code : "USD"
            };
            if(pixelData.fbParams) params =  pixelData.fbParams;
            console.log("--- pixel2 ---");
            console.log(data);
            console.log(params);
        }


        console.log(`%cFIRE EVENT : ${ev}`, 'color: #2196f3');
        if(!store.state.isPreview && store.state.settings && store.state.settings['facebook_multiple_pixel'] && store.state.settings['facebook_multiple_pixel'].length > 0){
        
        let event_id = 'STORE_'+ Date.now();
        let query = { name: "fbpx", type: ev, ref: window.location.href, event_id };
        if (params) { for (const key in params) { query[key] = params[key];} }
        if (localStorage.getItem('__fbp')) query['user_fbp'] = localStorage.getItem('__fbp');
        if (localStorage.getItem('__fbc')) query['user_fbc'] = localStorage.getItem('__fbc');
        
        if (data.currency) {
            let valueCur = 1 ;
            if (store.state.settings['facebook_currency'] && store.state.settings.facebook_currency[data.currency] && store.state.settings.facebook_currency[data.currency] != 0) {
            valueCur = store.state.settings.facebook_currency[data.currency];
            }
            data.currency = 'USD';
            data.value = Number(data.value) / valueCur;
        }
        if (ev == "Purchase") {
            store.state.settings['facebook_multiple_pixel'].forEach(pixel => {
            if (pixel.active) {
                if (pixel.type && pixel.type == "Lead") fbq("trackSingle", pixel.id, 'Lead', data, { eventID: event_id });
                else fbq("trackSingle", pixel.id, 'Purchase', data, { eventID: event_id });
            }
            });
        }else fbq("track", ev, data, { eventID: event_id });
        

        let exits = false;
        store.state.settings['facebook_multiple_pixel'].forEach(p => { if (p.active && p.token) exits = true;  });
        if (exits) {
            await $http.post(`/events/create`, data,{ params:query });
        }
        }
    }

    inject('storeino', storeino);
}
