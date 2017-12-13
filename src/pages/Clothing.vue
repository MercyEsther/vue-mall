<template>
<div id="clothing" ref="clothing">
    <Footer class="footer"/>
</div>
</template>

<script>
import Footer from "../components/Footer";
import Panel from "../components/Panel";

export default {
    name: 'clothing',
    components: {Footer},
    data() {
        return {

        }
    },

    created() {
        
    },

    mounted() {
        this.$refs.clothing.style.minHeight = window.screen.availHeight + "px";
    },

    methods: {
    }
}
</script>

<style scoped>
@import url(../css/common.css);

#clothing {
    position: relative;
    width: 100%;
}

</style>

