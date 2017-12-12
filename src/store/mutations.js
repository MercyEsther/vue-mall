export default {
    ADD_CART(state,product){
        let _cart = JSON.stringify(state.cart);
        let cart = JSON.stringify(product);

        if (_cart.indexOf(cart) > -1) {
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

        state.amount = getAmount(state.cart);
    }
}

function getAmount(obj){
    let amount = 0;
    obj.forEach((item,index) => {
        amount += item.count * item.price;
    })
    return amount;
}