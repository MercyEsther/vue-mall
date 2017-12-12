<template>
<div id="product" ref="product">
    <div class="row imgWrapper">
        <img class="productImg" src="static/7.jpg"/>
    </div>
    <div class="row">
        <h3 class="title">日系简约玻璃杯</h3>
    </div>
    <div class="row price">
        ¥32.5
    </div>
    <div class="row row3">
        <div class="choice">
            规格选择
        </div>
        <div class="add" @click="addCart">
            <i class="fa fa-shopping-cart"></i>
            加入购物车
        </div>
    </div>
</div>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
    name: "product",
    data() {
        return {
            product: {
                id: 1,
                name: '日系玻璃杯',
                price: 32.5
            }
        }
    },
    mounted() {
        this.$refs.product.style.minHeight = window.screen.availHeight + 'px';
    },
    methods: {
        ...mapMutations([
            'ADD_CART'
        ]),

        addCart() {
            this.ADD_CART(this.product);
        }
    }
}  
</script>

<style scoped> 
@import url(../css/common.css);

#product {
    position: relative;
    width: 100%;
    background-color: $light_grey;
}

.row {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: white;
}

.imgWrapper {
    align-items: center;
    height: 10rem;
    overflow: hidden;
    align-items: center;
}

.productImg {
    width: 100%;
}

.title {
    position: relative;
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    font-size: 0.9rem;
    font-weight: lighter;
    text-indent: 1rem;
    color: $middle_black;
}

.price {
    position: relative;
    width: 100%;
    height: 1.5rem;
    line-height: 1.5rem;
    font-size: 0.9rem;
    font-weight: lighter;
    text-indent: 1rem;
    color: $red;
}

.row3 {
    border-top: 1px solid #eee;
    justify-content: space-around;
}

.choice, .add {
    position: relative;
    width: 50%;
    height: 2rem;
    line-height: 2rem;
    font-size: 0.9rem;
    font-weight: lighter;
    text-align: center;
    color: $middle_black;
}

.choice {
    color: $dark_black;
    background-color: $middle_grey;
}

.add {
    border-left: 1px solid white;
    background-color: $orange;
}
</style>

