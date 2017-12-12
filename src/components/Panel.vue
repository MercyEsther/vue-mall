<template>
<div :title="title" :products="products" id="panel">
    <h3 class="title">{{title}}</h3>
    <div class="imgs">
        <div class="img" :key="product.name" v-for="product in products">
            <router-link class="link" to="/product">
                <img :src="product.img">
                <div class="desc">
                    <span class="price">¥{{product.price}}</span>
                    <span class="name">{{product.name}}</span>
                </div>
            </router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "panel",
    props: [
        'title',
        'products'
    ],
    data() {
        return {

        }
    },
    created() {
        console.log("products",this.products)
    }
}
</script>

<style>
@import url(../css/common.css);

#panel {
    position: relative;
    width: 100%;
    padding: 0.5rem;
}

.title {
    position: relative;
    width: 100%;
    height: 2rem;
    border-bottom: 1px solid $middle_grey;
    line-height: 2rem;
    font-size: 1rem;
    font-weight: lighter;
    color: $light_black;
}

.imgs {
    position: relative;
    width: 100%;
    margin-top: 0.5rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}

.img {
    position: relative;
    flex: 0 1 30%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.img img {
    position: relative;
    height: 6rem;
}

.desc {
    position: relative;
    height: 4rem;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
}

.name {
    position: relative;
    font-size: 0.75rem;
    font-weight: lighter;
    color: $middle_black;
}

.price {
    position: relative;
    font-weight: lighter;
    text-align: center;
    color: $red;
}

.link {
    text-decoration: none;
}
</style>
