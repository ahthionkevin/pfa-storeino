import https from 'https';
export default function ({ $axios, store, $tools, app, route }, inject) {
  if(process.server) {
    const config = require('config');
    if (process.env.NODE_ENV == 'production') store.state.baseURL = "https://api-stores.storeino.com/api";
    if(config.get('env') == 'production') store.state.baseURL = "https://api-stores.storeino.com/api";
    let cookies = $tools.cookieToObject(app.context.req.headers.cookie);
    // Set Currency and language
    if(route.query.cur) {
      store.state.currency.code = route.query.cur;
    }else if(cookies['CURRENT_CURRENCY']) {
      store.state.currency.code = cookies['CURRENT_CURRENCY'];
    }
    if(route.query.lang) {
      store.state.language.code = route.query.lang;
    }else if(cookies['CURRENT_LANGUAGE']) {
      store.state.language.code = cookies['CURRENT_LANGUAGE'];
    }
    if (app.context.req && app.context.req.headers && app.context.req.headers['x-auth-token']) {
      // baseURL = 'http://api-stores:3031/api';
      store.state.token = app.context.req.headers['x-auth-token'];
    }
  }else{
    if(store.state.currency.code) document.cookie = `CURRENT_CURRENCY=${store.state.currency.code}`;
    if(store.state.language.code) document.cookie = `CURRENT_LANGUAGE=${store.state.language.code}`;
  }
  const http = $axios.create({
    baseURL: store.state.baseURL,
    headers: { 'x-auth-token': store.state.token },
    httpsAgent: new https.Agent({
      rejectUnauthorized: false
    })
  });
  http.interceptors.request.use(function (config) {
    console.log(`${config.method.toUpperCase()} ${config.url[0]=='/' ? config.baseURL : ''}${config.url}`);
    if(!config.params) config.params = {};
    if (!config.params.lang && store.state.language.code) config.params.lang = store.state.language.code;
    if (!config.params.cur && store.state.currency.code) config.params.cur = store.state.currency.code;
    return config;
  }, function (error) {
    return Promise.reject(error);
  });
  inject('http', http);
}