<template>
<div id="furniture" ref="furniture">
</div>
</template>

<script>
import Footer from "../components/Footer";
import {mapMutations} from "vuex";

export default {
    name: 'furniture',
    components: {Footer},
    data() {
        return {

        }
    },

    mounted() {
        this.$refs.furniture.style.minHeight = window.screen.availHeight + "px";        
    },

    methods: {
        ...mapMutations([
        ])
    }
}
</script>

<style scoped>
@import url(../css/common.css);

#furniture {
    position: relative;
    width: 100%;
}
</style>

