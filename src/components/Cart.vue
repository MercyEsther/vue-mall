<template>
<div id="cart">
    <div class="top" @click="toTop"><i class="fa up fa-chevron-up"></i></div>
    <div class="shopingCart">
        <span class="price">728</span>
        <img src="static/cart.png" alt="">
    </div>
    <div class="bottom" @click="toBottom"><i class="fa down fa-chevron-down"></i></div>
</div>
</template>

<script>
export default {
    name: "cart",
    data() {
        return {

        }
    },
    methods: {
        toTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },

        toBottom() {
            document.body.scrollTop = document.body.clientHeight;
            document.documentElement.scrollTop = document.documentElement.clientHeight;
        }
    }
}
</script>

<style scoped>
@import url(../css/common.css);

#cart {
    position: fixed;
    z-index: 10;
    right: 0.5rem;
    top: 14rem;
    width: 2rem;
    height: 6rem;
    background-color: $orange;
}

.top, .bottom {
    position: absolute;
    width: 2rem;
    height: 2rem;
    text-align: center;
    line-height: 2rem;
}

.top {
    top: 0rem;
}

.bottom {
    bottom: 0;
}

.up , .down {
    font-size: 0.8rem;
    font-weight: 300;
    color: white;
}

.shopingCart {
    position: absolute;
    width: 2rem;
    top: 1.5rem;
    text-align: center;
}

img {
    position: relative;
    width: 1rem;
}

.price {
    position: relative;
    line-height: 1.8rem;
    font-size: 0.7rem;
    border-radius: 5px;
    color: $middle_black;
}
</style>

