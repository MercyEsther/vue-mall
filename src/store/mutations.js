export default {
    ADD_CART(state,product){
        let _cartId = [];
        state.cart.forEach((item,index) => {
            _cartId.push(item.id);
        })

        if (_cartId.indexOf(product.id) > -1) {
            for (let i in state.cart){
                if (state.cart[i].id == product.id){
                    state.cart[i].count++;
                }
            }
        }
        else {
            product.count = 1;
            state.cart.push(product);
        }
        console.log("store cart:",state.cart);
        state.amount = getAmount(state.cart);
    },

    SET_ADDRESS(state,address){
        
    }
}

function getAmount(obj){
    let amount = 0;
    obj.forEach((item,index) => {
        amount += item.count * item.price;
    })
    return amount;
}