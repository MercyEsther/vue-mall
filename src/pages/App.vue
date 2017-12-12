<template>
<div id="home">
    <Search/>
    <Navbar/>
    <Cart/>
    <router-view></router-view>
</div>
</template>

<script>
import Cart from "../components/Cart";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import {mapState, mapMutations} from "vuex";

export default {
    name: "home",
    components: {Navbar, Search, Cart},

    data() {
        return {
        }
    }
}
</script>

<style scoped>

</style>

