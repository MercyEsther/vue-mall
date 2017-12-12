<template>
<div id="food" ref="food">
    <Footer/>
</div>
</template>

<script>
import Footer from "../components/Footer";
import {mapMutations} from "vuex";

export default {
    name: 'food',
    components: {Footer},
    data() {
        return {

        }
    },

    created() {
        this.setPage("food");
    },

    mounted() {
        this.$refs.food.style.minHeight = window.screen.availHeight + 'px';
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

#food {
    position: relative;
    width: 100%;
}
</style>

