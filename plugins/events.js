export default function({ app, store, $tools }, inject){
    if(!process.server){
        window.addEventListener('ADD_TO_CART', (e) => {
            const item = $tools.reformCartItem(e.data);
            store.state.cart.push(item);
        });
    }
}