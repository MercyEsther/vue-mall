<script>
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import {mapState, mapMutations} from "vuex";

export default {
    name: "home",
    components: {Navbar, Search},

    data() {
        return {
        }
    }
}
</script>

<template>
<div id="home">
    <Search/>
    <Navbar/>
    <router-view></router-view>
</div>
</template>

<style scoped>

</style>

