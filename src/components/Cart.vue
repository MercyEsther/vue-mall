<template>
<div id="cart">
    <div class="top" @click="toTop"><i class="fa up fa-chevron-up"></i></div>
    <div class="shoppingCart">
        <i class="fa fa-shopping-cart" :class="{animate: isAnimate}" @click="toCart"></i>
    </div>
    <div class="bottom" @click="toBottom"><i class="fa down fa-chevron-down"></i></div>
</div>
</template>

<script>
import {mapState, mapMutations} from "vuex";

export default {
    name: "cart",
    data() {
        return {
            isAnimate: false
        }
    },
    computed: {
        ...mapState([
            'cart',
            'amount'
        ])
    },
    watch: {
        amount(){
            let count = 0;
            let timer = setInterval(()=>{
                this.isAnimate = !this.isAnimate;
                ++count;
                if (count == 4){
                    clearInterval(timer);
                }
            },100);
        }
    },
    methods: {
        ...mapMutations([
            'SET_AMOUNT'
        ]),

        toTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },

        toBottom() {
            document.body.scrollTop = document.body.clientHeight;
            document.documentElement.scrollTop = document.documentElement.clientHeight;
        },

        toCart() {
            this.$router.push("/payment")
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
    height: 4rem;
    background-color: $orange;
}


.top, .bottom {
    position: absolute;
    width: 2rem;
    height: 1.5rem;
    text-align: center;
    line-height: 1.5rem;
}

.top {
    top: 0rem;
}

.bottom {
    bottom: 0rem;
}

.up , .down {
    font-size: 0.8rem;
    font-weight: 300;
    color: white;
}

.shoppingCart {
    position: absolute;
    width: 2rem;
    top: 1.5rem;
    text-align: center;
}

.shoppingCart i {
    position: relative;
    width: 2rem;
    height: 1rem;
    line-height: 1rem;
    color: $dark_black;
    font-size: 1rem; 
    transition: all .1s ease;
}

.animate {
    font-size: 1.3rem !important;
    transform: translateY(-0.3rem);
}

.price {
    position: relative;
    width: 100%;
    line-height: 1.8rem;
    font-size: 0.7rem;
    border-radius: 5px;
    text-align: center;
    color: $middle_black;
}
</style>

