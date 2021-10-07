export default function({ app, store, $tools }, inject){
    if(!process.server){
        window.addEventListener('ADD_TO_CART', (e) => {
            console.log({e});
            const item = $tools.reformCartItem(e.data);
            let exists = null;
            if(item.variant) exists = store.state.cart.find(i => i._id === item._id && i.variant && i.variant._id === item.variant._id);
            else exists = store.state.cart.find(i => i._id === item._id);
            if(exists){
                exists.quantity = item.quantity;
            }else{
                store.state.cart.push(item);
            }
            $tools.setCart(store.state.cart);
        });
    }
}