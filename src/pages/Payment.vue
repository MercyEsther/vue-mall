<template>
<div id="payment">
    <div class="row navbar">
        <button class="back" @click="back">返回</button>
    </div>
    <div class="row">
        <h3 class="title">商品清单</h3>
    </div>
    <div class="row productList">
        <div class="product" :key="product.id" v-for="product in cart">
            <span class="name">{{product.name}}</span>
            <span class="count">x{{product.count}}</span>
            <span class="price">¥{{product.price}}</span>
        </div>
    </div>
    <div class="row address">
        <button @click="setAddress"><i class="fa icon fa-pencil-square-o"></i>收货地址</button>
        <p>{{address}}</p>
    </div>
    <div class="row payWrapper">
        <span class="amount">¥{{amount}}</span>
        <button class="pay">结算</button>
    </div>
</div>
</template>

<script>
import {mapState,mapMutations} from "vuex";

export default {
    name: 'payment',
    data() {
        return {

        }
    },
    computed: {
        ...mapState([
            'cart',
            'amount',
            'address'
        ])
    },
    methods: {
        back() {
            this.$router.go(-1);
        },
        
        setAddress() {
            this.$router.push('/address');
        }
    }
}
</script>

<style scoped>
@import url(../css/common.css);

#payment {
    position: relative;
    width: 100%;
}

.row {
    position: relative;
    width: 100%;
    padding: 0.5rem;
}

.navbar {
}

.back {
    position: relative;
    width: 3rem;
    height: 1.5rem;
    font-size: 0.8rem; 
    font-weight: lighter;
    border: none;
    color: $middle_black;
    background-color: $orange;
}

.title {
    position: relative;
    height: 2rem;
    line-height: 2rem;
    font-size: 1rem;
    font-weight: normal;
    text-align: center;
    border: none;
    color: $middle_black;
}

.product {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-around;
}

.product span {
    font-size: 0.75rem;
    font-weight: lighter;
    color: $middle_black;
}

.payWrapper {
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 2.5rem;
    width: 100%;
    padding: 0;
    bottom: 0;
    left: 0;
    background-color: $light_grey;
}

.pay {
    flex: 0 1 30%;
    position: relative;
    margin: 0;
    height: 2.5rem;
    border: none;
    border-radius: 0px;
    font-size: 0.9rem;
    color: $dark_black;
    background-color: $orange;
}

.amount {
    flex: 0 1 70%;
    position: relative;
    height: 100%;
    font-size: 1rem;
    font-weight: lighter;
    line-height: 2.5rem;
    text-align: center;
    color: $red;
    background-color: $light_grey;
}

.address {
    position: fixed;
    bottom: 2.5rem;
    left: 0;
    border: 1px solid $light_grey;
    background-color: white;
}

.address button {
    font-size: 0.8rem;
    font-weight: lighter;
}

.icon {
    margin-right: 0.5rem;
    color: #888;
}
</style>

