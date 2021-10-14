export default function({ app, store, $tools }, inject){
    if(!process.server){
        window.addEventListener('ADD_TO_CART', (e) => {
            const item = $tools.reformCartItem(e.data);
            let exists = null;
            if(item.variant) exists = store.state.cart.find(i => i._id === item._id && i.variant && i.variant._id === item.variant._id);
            else exists = store.state.cart.find(i => i._id === item._id);
            if(exists){
                item.parents = [...new Set([...exists.parents, ...item.parents])];
                exists.quantity = item.quantity;
            }else{
                store.state.cart.push(item);
            }
            $tools.setCart(store.state.cart);
        });
        window.addEventListener('REMOVE_FROM_CART', (e)=>{
            console.log('REMOVE_FROM_CART', e);
            const item = $tools.reformCartItem(e.data);
            let index = -1;
            if(item.variant) index = store.state.cart.findIndex(i => i._id === item._id && i.variant && i.variant._id === item.variant._id);
            else index = store.state.cart.findIndex(i => i._id === item._id);
            if(index == -1) return;
            store.state.cart.splice(index, 1);
            const childs = store.state.cart.filter(i => i.parents && i.parents.includes(item._id));
            for (const child of childs) {
                const childIndex = store.state.cart.findIndex(i => i._id == child._id);
                child.parents.splice(child.parents.indexOf(item._id), 1);
                if(child.parents.length == 0) store.state.cart.splice(childIndex, 1);
            }
            $tools.setCart(store.state.cart);
        });
    }
}