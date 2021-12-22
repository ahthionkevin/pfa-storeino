import StoreinoApp from 'vue/dist/vue.common.prod';
export default async function ({ $axios, $http ,route, $tools, $storeino, store, app, redirect }, inject) {
    if(process.server) {
        let response = null;
        const req = app.context.req;
        // Get Template settings
        // Set current domain
        store.state.domain = req.headers.host;
        try {
            if(req.body && req.body.preview){
                console.log("Is Preview");
                store.state.isPreview = true;
                const body = { data: JSON.parse(req.body.preview.data), schema: JSON.parse(req.body.preview.schema) };
                response = await $http.post('/settings/current', body);
            }else{
               response = await $http.get('/settings/current');
            }
            store.state.settings = response.data;
        } catch (error) {
            console.log({ error: error.response });
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

        // Head tags
        // Meta tags
        const settings = store.state.settings;
        if(settings &&settings.meta_tags &&settings.meta_tags.length > 0){
            for (const metaTag of settings.meta_tags) {
                const meta = { hid: metaTag[metaTag.type], [metaTag.type]: metaTag[metaTag.type], content: metaTag.content }
                store.state.seo.metaTags.push(meta);
            }
        }
        // Set Default currency And language
        if(!store.state.currency.code){
          const { code, symbol } = settings.store_currencies.find(c=>c.default) || settings.store_currencies[0];
          store.state.currency = { code, symbol };
        }else if(settings.store_currencies.find(c=>c.code == store.state.currency.code)) store.state.currency.symbol = settings.store_currencies.find(c=>c.code == store.state.currency.code).symbol;
        if(!store.state.language.code){
          const { code, name } = settings.store_languages.find(c=>c.default) || settings.store_languages[0];
          store.state.language = { code, name };
        }
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
        } catch (e) {
            console.log({e});
        }
    }else{
      // client side
      const cookies = $tools.cookieToObject(document.cookie);
      if(route.name == 'thanks'){
        if(cookies['ORDER_ID']) {
          document.cookie = 'ORDER_ID=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        }else{
          window.location.href = '/';
          return false;
        }
      }


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
      const settings = store.state.settings;
      // Facebook pixel
      !function (s, t, o, r, e, i, n, o_) {
          if(!(settings.facebook_multiple_pixel && settings.facebook_multiple_pixel.length > 0)){ r = 'data:application/javascript;utf-8,console.log("Fb%20Pixel%20not%20found%20")'; }
          if (s.fbq) return; e = s.fbq = function () { e.callMethod ? e.callMethod.apply(e, arguments) : e.queue.push(arguments); }
          if (!s.fbq) s._fbq = e; e.push = e; e.loaded = !0; e.version = '2.0'; e.queue = [];
          i = t.createElement(o); i.async = !0; i.src = r; t.head.appendChild(i);
          s.fbPixel = function (fbId, d = {}) { s.fbq(o_, String(fbId).trim(), d);};
          s.fbPageView = function (d = {}) { s.fbq(n, 'PageView', d); };
          s.fbAddToCart = function (d = {}) { fbq(n, 'AddToCart', d); };
          s.fbViewContent = function (d = {}) { fbq(n, 'ViewContent', d); };
          s.fbCompleteRegistration = function (d = {}) { fbq(n, 'CompleteRegistration', d); };
          s.fbInitiateCheckout = function (d = {}) { fbq(n, 'InitiateCheckout', d); };
          s.fbAddPaymentInfo = function (d = {}) { fbq(n, 'AddPaymentInfo', d); };
          s.fbPurchase = function (d = {}, id=null) {
              let valueCur = 1 ;
              if (d.currency && settings && settings.facebook_currency && settings.facebook_currency[d.currency] && settings.facebook_currency[d.currency] != 0 ) {
                  valueCur = settings.facebook_currency[d.currency];
              }
              d.currency = 'USD';
            d.value = Number(d.value) / valueCur;
             if (id) {
              fbq('trackSingle', id, 'Purchase', d);
             }else  fbq(n, 'Purchase', d);
          };
          s.fbSearch = function (d = {}) { fbq(n, 'Search', d); };
        s.fbLead = function (d = {}, id = null) {
           let valueCur = 1 ;
           if (d.currency && settings && settings.facebook_currency && settings.facebook_currency[d.currency] && settings.facebook_currency[d.currency] != 0 ) {
               valueCur = settings.facebook_currency[d.currency];
           }
           d.currency = 'USD';
          if (id) {
            fbq('trackSingle', id, 'Lead', d);
          }else fbq(n, 'Lead', d);
        };
          s.fbContact = function (d = {}) { fbq(n, 'Contact', d); };
          s.fbAddToWishlist = function (d = {}) { fbq(n, 'AddToWishlist', d); };
          s.fbCustomizeProduct = function (d = {}) { fbq(n, 'CustomizeProduct', d); };
          s.fbDonate = function (d = {}) { fbq(n, 'Donate', d); };
          s.fbStartTrial = function (d = {}) { fbq(n, 'StartTrial', d); }; s.c = function (d = {}) { fbq(n, 'SubmitApplication', d); };
          s.fbSubscribe = function (d = {}) { fbq(n, 'Subscribe', d); };
      }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js', 0, 0, 'track', 'init');
      if(settings.facebook_multiple_pixel && settings.facebook_multiple_pixel.length > 0){
        for (const pixel of settings.facebook_multiple_pixel) {
            if (pixel.active){
                if(!pixel.token) {
                    console.log("%cSimple Facebook pixel is ready", 'color: #bada55');
                    fbPixel(pixel.id);
                }else{
                    console.log("%cAPI Facebook pixel is ready", 'color: #bada55');
                }
            }
            if(route.query.pixel){
              const objData = JSON.parse(route.query.pixel);
              $storeino.fbpx('PageView')
              $storeino.fbpx('Purchase',objData)
              if(pixel.type && pixel.type=="Lead" ){
                window.fbLead(objData,pixel.id);
              }else{
                window.fbPurchase(objData,pixel.id);
              }
            }
        }
      }
      // Tiktok pixel

      !function (w, d, t) {
        w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){
          var i="https://analytics.tiktok.com/i18n/pixel/events.js";
          if(!(settings.tiktok_pixel && settings.tiktok_pixel.length > 0)){ i = 'data:application/javascript;utf-8,console.log("Tiktok%20Pixel%20not%20found")'; }
          else { ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a) };
        }
        w.tiktokPixel = function (id) { ttq.load(id); }
        w.tiktokPageView = function (){ ttq.page();}
        w.tiktokAddPaymentInfo = function (s = {}) { ttq.track('AddPaymentInfo', s); }
        w.tiktokAddToCart = function (s = {}) { ttq.track('AddToCart', s); }
        w.tiktokAddToWishlist = function (s = {}) { ttq.track('AddToWishlist', s); }
        w.tiktokClickButton = function (s = {}) { ttq.track('ClickButton', s); }
        w.tiktokPurchase = function (s = {}) { ttq.track('CompletePayment', s); }
        w.tiktokCompleteRegistration = function (s = {}) { ttq.track('CompleteRegistration', s); }
        w.tiktokViewContent = function (s = {}) { ttq.track('ViewContent', s); }
        w.tiktokSubscribe = function (s = {}) { ttq.track('Subscribe', s); }
        w.tiktokSubmitForm = function (s = {}) { ttq.track('SubmitForm', s); }
        w.tiktokSearch = function (s = {}) { ttq.track('Search', s); }
        w.tiktokPlaceAnOrder = function (s = {}) { ttq.track('PlaceAnOrder', s); }
        w.tiktokInitiateCheckout = function (s = {}) { ttq.track('InitiateCheckout', s); }
        w.tiktokDownload = function (s = {}) { ttq.track('Download', s); }
        w.tiktokContact = function (s = {}) { ttq.track('Contact', s); }
      }(window, document, 'ttq');
      if(settings.tiktok_pixel && settings.tiktok_pixel.length > 0){
        for (const pixel of settings.tiktok_pixel) {
            if (pixel.active){
              window.tiktokPixel(pixel.id);
              console.log("%cSimple Tiktok pixel is ready", 'color: #bada55');
            }
        }
        if(route.query.pixel){
          const pixel = JSON.parse(route.query.pixel);
          window.tiktokPurchase(
            {
              contents: pixel.contents.map(p => {
                return {
                  content_id: p.id,
                  content_type: 'product',
                  content_name: p.name,
                  quantity: p.quantity,
                  price: p.price
                }
              }),
              value: pixel.total,
              currency: store.state.currency.code || "USD"
           });
        }
      }
      // Snapchat Pixel
      (function (e, t, n, tr) {
        if(!(settings.snapchat_pixel && settings.snapchat_pixel.length > 0)){ n = 'data:application/javascript;utf-8,console.log("Snap%20Pixel%20not%20found")'; }
        if (e.snaptr) return; var a = e.snaptr = function () { a.handleRequest ? a.handleRequest.apply(a, arguments) : a.queue.push(arguments) };
        e.snapPixel = function (id, email = "") { snaptr('init', id, { 'user_email': email }); }
        e.snapPageView = function (d = {}) { snaptr(tr, 'PAGE_VIEW', d); }
        e.snapPurchase = function (d = {}) { snaptr(tr, "PURCHASE", d) }
        e.snapViewContent = function (d = {}) { snaptr(tr, 'VIEW_CONTENT', d) }
        e.snapAddToCart = function (d = {}) { snaptr(tr, "ADD_CART", d) }
        e.snapAddToWishlist = function (d = {}) { snaptr(tr, "ADD_WISHLIST", d) }
        e.snapSignUp = function (d = {}) { snaptr(tr, 'SIGN_UP', d) }
        a.queue = []; var s = 'script', r = t.createElement(s); r.async = !0;
        r.src = n; var u = t.getElementsByTagName(s)[0];
        u.parentNode.insertBefore(r, u);
      })(window, document, 'https://sc-static.net/scevent.min.js', 'track');
      if(settings.snapchat_pixel && settings.snapchat_pixel.length > 0){
        for (const pixel of settings.snapchat_pixel) {
          if (pixel.active){
            console.log("%cSimple Snapchat pixel is ready", 'color: #bada55');
            snapPixel(pixel.id, pixel.email);
          }
        }
        if(route.name == 'thanks' && route.query.pixel){
          window.snapPurchase({});
        }
      }
      
      // google ads d
      (function (w, d, t) {
        if(settings && settings.google_ads && settings.google_ads.id){
          var s = d.createElement(t); s.async = !0;
          s.src = `https://www.googletagmanager.com/gtag/js?id=${settings.google_analytics_id}`;
          var h = d.getElementsByTagName('head')[0];
          h.appendChild(s);
          w.dataLayer = w.dataLayer || [];
          w.gtag = function gtag(){dataLayer.push(arguments);};
          w.gtag('js', new Date());
          w.gtag('config', settings.google_ads.id);
        }else w.gtag = function gtag(a,b,c,d){};
      })(window, document, 'script');
      // google analytics
      if(settings && settings.google_analytics_id){
        console.log("Add Google Analytics");
        var ga = document.createElement('script');
        ga.type = 'text/javascript'; ga.async = true;
        ga.src = 'https://www.googletagmanager.com/gtag/js?id=' + settings.google_analytics_id;
        document.getElementsByTagName('head')[0].appendChild(ga);
        window.dataLayer = window.dataLayer || [];
        window.gtag = function(){dataLayer.push(arguments);}
        window.gtag('js', new Date());
        window.gtag('config', settings.google_analytics_id);
      }

      window.googleAdsEvent = (eventName)=>{
        if(settings.google_ads && settings.google_ads.id && settings.google_ads.events){
          console.log(`%cGoogle Ads ${eventName}`, 'color: #bada55');
          const eventsGroup = settings.google_ads.events.filter((e)=>e.name==eventName)
          if (eventsGroup.length > 0){
            for (const event of eventsGroup) {
              const object = {
                'send_to':`${settings.google_ads.id}/${event.value}`,
                'event_callback': ()=>{}
              };
              console.log("Google Ads Event");
              gtag('event', 'conversion', object);
            }
          }
        }
      }
      if(settings.google_ads && settings.google_ads.id && settings.google_ads.events){
        if(route.name == 'thanks' && route.query.pixel){
          window.googleAdsEvent('purchase');
        }
      }
    }
    inject('settings', store.state.settings);
}
