<template>
<div id="product" ref="product">
    <div class="content">
    <div class="row imgWrapper">
        <img class="productImg" src="static/7.jpg"/>
    </div>
    <div class="row row1">
        <h3 class="title">日系简约玻璃杯</h3>
        <div class="price">¥32.5</div>
    </div>
    <div class="row row3">
        <div class="choice" @click="displayChoice = true;">
            规格选择
        </div>
        <div class="add" @click="addCart">
            <i class="fa fa-shopping-cart"></i>
            加入购物车
        </div>
    </div>

    <div class="choiceWrapper" v-if="displayChoice">
        <div class="choice">
            <span for="">尺寸：</span>
            <label for="small" :class="{sActive: sActive}">小</label><input id="small" type="radio" name="size" value="small" v-model="size">
            <label for="middle" :class="{mActive: mActive}">中</label><input id="middle" type="radio" name="size" value="middle" v-model="size">
            <label for="large" :class="{lActive: lActive}">大</label><input id="large" type="radio" name="size" value="large" v-model="size">
        </div>
        <div class="btn">
            <button @click="displayChoice = false;">确定</button>
        </div>
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
            },
            size: 'middle',
            displayChoice: false
        }
    },
    computed: {
       sActive() {
           if (this.size == "small") {
               return true;
           }
       },
       mActive() {
           if (this.size == "middle") {
               return true;
           }
       },
       lActive() {
           if (this.size == "large") {
               return true;
           }
       }
    },
    watch: {
        size() {
            console.log("size",this.size);
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
        },

        showChoice() {

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

.content {
    position: relative;
    width: 100%;
    height: auto;
    background-color: white;
}

.row {
    position: relative;
    width: 100%;
    display: flex;
    border: none;
    flex-direction: row;
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

.title, .price {
    position: relative;
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    font-size: 0.9rem;
    font-weight: lighter;
    text-align: center;
    color: $middle_black;
}

.price {
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

.choiceWrapper {
    position: absolute;
    z-index: 100;
    top: 5rem;
    left: 10%;
    width: 80%;
    height: 8rem;
    padding: 0.5rem;
    background-color: white;
    border: 1px solid $light_grey;
    color: $light_black;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.choiceWrapper .choice {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: transparent;
}

.choiceWrapper label {
    flex: 0 1 20%;
    display: block;
    line-height: 1.5rem;
    font-size: 0.75rem;
    height: 1.5rem;
    text-align: center;
    background-color: $light_grey;
}

.choiceWrapper label.sActive, label.mActive, label.lActive {
    color: $middle_black;
    background-color: $orange;
}

.choiceWrapper span {
    font-size: 0.8rem;
}

.choiceWrapper input {
    display: none;
}

.btn {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.btn button {
    position: relative;
    width: 3.5rem;
    height: 1.8rem;
    border: 1px solid $middle_grey;
    border-radius: 0px;
    color: $middle_black;
    background-color: $light_grey;
}
</style>

