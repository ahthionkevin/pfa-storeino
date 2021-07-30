export default async function ({ $axios, $http, store, app }, inject) {
    if(process.server) {
        const req = app.context.req;
        // Set Currency and language

        // Get Template settings
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
            console.log({ error: error.response.data });
        }
    }
    inject('settings', store.state.settings);
}