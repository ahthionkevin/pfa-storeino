export default async function ({ $http, store, app }, inject) {
    const storeino = {};
    // Gets
    const gets = ['products', 'collections' ,'pages'];
    // Searches
    const searches = ['products', 'collections', 'upsells' ,'pages', 'brands', 'reviews'];
    // Creates and updates
    const creates = ['customers', 'orders'];
    const updates = ['customers', 'orders'];
    
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
    
    inject('storeino', storeino);
}