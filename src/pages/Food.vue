<template>
<div id="food" ref="food">
    <Footer/>
</div>
</template>

<script>
import Footer from "../components/Footer";

export default {
    name: 'food',
    components: {Footer},
    data() {
        return {

        }
    },

    created() {
    },

    mounted() {
        this.$refs.food.style.minHeight = window.screen.availHeight + 'px';
    },

    methods: {
        ...mapMutations([
        ])
    }
}
</script>

<style scoped>
@import url(../css/common.css);

#food {
    position: relative;
    width: 100%;
}
</style>

