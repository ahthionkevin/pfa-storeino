import https from 'https';
let baseURL = 'https://api-stores.storeino.world/api';
if (process.env.environment !== 'production') baseURL = "https://api-stores.storeino.com/api";
export default function ({ $axios, store, app }, inject) {
  if(process.server) {
    if (app.context.req && app.context.req.headers && app.context.req.headers['x-auth-token']) {
      baseURL = 'http://api-stores:3031/api';
      store.state.token = app.context.req.headers['x-auth-token'];
    }
  }
  const http = $axios.create({
    baseURL: baseURL,
    headers: { 'x-auth-token': store.state.token },
    httpsAgent: new https.Agent({
      rejectUnauthorized: false
    })
  });
  inject('http', http);
}