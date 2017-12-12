<template>
<div id="home">
    <Search/>
    <Navbar/>
    <Cart/>
    <transition name="fade">
        <router-view></router-view>
    </transition>
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
.fade-enter-active, .fade-leave-active {
    transition: all .2s ease;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateX(5rem);
}
</style>

