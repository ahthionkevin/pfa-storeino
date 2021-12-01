export default async function ({ $http, store, app }, inject) {
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

  storeino.fbpx = async function (ev, data = {}) {
     console.log(`%cFIRE EVENT : ${ev}`, 'color: #2196f3');
      if(!store.state.isPreview && store.state.settings && store.state.settings['facebook_multiple_pixel'] && store.state.settings['facebook_multiple_pixel'].length > 0){
      let exits = false;
      store.state.settings['facebook_multiple_pixel'].forEach(p => { if (p.active && p.token) exits = true;  });
      if (exits) {
        let urlRef = window.location.href;
        const { data } = await $http.post(`/events/create?name=fbpx&type=${ev}&ref=${urlRef}`,data);
      }
    }
   }

    inject('storeino', storeino);
}
