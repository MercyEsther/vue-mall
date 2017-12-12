<template>
<div id="recommend">
    <div class="swiper-container">
        <!-- swiper -->
        <div class="swiper-wrapper">
            <div class="swiper-slide" :key="banner" v-for="banner in banners">
                <img :src="banner" alt="">
            </div>
        </div>
            
        <!-- controller  -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>

    <div class="contents">
        <Panel :title="hotTitle" :products="hotProducts"/>
        <Panel :title="recommendTitle" :products="recommendProducts"/>
    </div>

    <Footer/>
</div>
</template>

<script>
import Panel from "../components/Panel";
import Footer from "../components/Footer";
import {mapMutations} from "vuex";
import data from "../data.json";

export default {
    name: 'recommend',
    components: {Panel, Footer},
    data() {
        return {
            hotTitle: '热门商品',
            recommendTitle: "推荐商品",
            banners: [
                'static/scroll1.png',
                'static/scroll2.jpg',
                'static/scroll3.jpg'
            ],
            hotProducts: data.channels[0].contents.hotProducts,
            recommendProducts: data.channels[0].contents.recommendProducts
        }
    },

    created() {
        this.setPage("recommend");
    },

    mounted() {
        var mySwiper = new Swiper ('.swiper-container', {
            autoplay: true,
            loop: true,
            speed: 1000,
            delay: 2000,

            // 如果需要分页器
            pagination: {
            el: '.swiper-pagination',
            },
            
            // 如果需要前进后退按钮
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            }
        })  
    },

    methods: {
        ...mapMutations([
            'setPage'
        ])
    }
}
</script>

<style scoped>
@import url(../css/common.css);

#recommend {
    position: relative;
    width: 100%;
    height: 
}

.swiper-container {
    width: 100%;
    height: 12rem;
    margin-bottom: 1rem;
}

.swiper-container img {
    height: 100%;
}

.swiper-button-prev,
.swiper-button-next {
    height: 1rem;
}
.swiper-button-prev {
    background-image: url("../../static/scrollLeft.png");
}
.swiper-button-next {
    background-image: url("../../static/scrollRight.png");
}

.contents {
    position: relative;
    width: 100%;
    padding-bottom: 6rem;
}
</style>

