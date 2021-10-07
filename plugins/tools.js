export default function({ store }, inject){
    const tools = {};
    tools.hexToRgb = (hex) => {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : { r: 0, g: 0, b: 0 };
    }
    tools.copy = (value)=> {
        const type = typeof(value);
        if(type == 'number') return value * 1;
        if(type == 'string') return value + '';
        if(value === null || value === undefined) return undefined;
        if(type == 'object') return JSON.parse(JSON.stringify(value));
        return value;
    }
    tools.cookieToObject = (cookie)=> {
        if(!cookie) return {};
        console.log(cookie);
        const cookies = cookie.split(';');
        const result = {};
        for(let i = 0; i < cookies.length; i++){
            const key = cookies[i].split('=')[0].trim();
            const value = cookies[i].split('=')[1]?cookies[i].split('=')[1].trim() : '';
            result[key] = value;
        }
        return result;
    }
    tools.call = (name, data = {}) => {
        if (!window.events) window.events = {}
        if (!window.events[name]) window.events[name] = new CustomEvent(name);
        window.events[name].data = data
        window.dispatchEvent(window.events[name]);
    }
    tools.reformCartItem = (item) => {
        console.log({item});
        const result = {};
        result._id = item._id;
        result.quantity = item.quantity;
        result.price = item.price;
        if(item.variant){ result.variant = { _id: item.variant._id }; }
        if(item.upsell){
            result.parents = item.parents;
            result.upsell = {
                _id: item.upsell._id,
                type: item.upsell.type,
                value: item.upsell.value
            };
        }
        console.log({result});
        return result;
    }
    tools.setCart = (cart) => {
        const cartString = JSON.stringify(cart);
        document.cookie = `STOREINO-CART=${cartString};`;
        console.log(`STOREINO-CART=${cartString};`);
    }
    inject('tools', tools);
}