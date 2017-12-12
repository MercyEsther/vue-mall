<template>
<nav 
    id="nav" 
    :color = "color"
    :icon = "icon"
    :class="['nav-color-' + color]"
    class="nav">
    <li class="location">
        <Location/>
    </li>
    <router-link class="link" :key="channel.name" v-for="channel in channels" :to="{name: channel.path}">
        <li :class="{active: channel.path == page}">
            {{channel.name}}
        </li>
    </router-link>
</nav>
</template>

<script>
import Location from "../components/Location.vue";
import {mapState} from "vuex";
import data from  "../data.json";

export default {
    name: "ic-navbar",
    components: {Location},
    props: {
        nativeColor: String,
        color: {
            type: String,
            default: "default"
        },
        icon: {
            type: String,
            default: "static/icon.png"
        }
    },

    data() {
        return {
            channels: data.channels,
            page: ''
        }
    },

    computed: {
       
    },

    mounted() {
        this.page = this.$route.name;
    },

    watch: {
        $route(to,from) {
            this.page = to.name;
        }
    }
}
</script>

<style scoped>
@import url(../css/common.css);
#nav {
    position: relative;
    width: 100%;
    height: 2.3rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    overflow-x: scroll;
}

.nav-color-default {
    color: $light_black;
    background-color: $light_grey;
    box-shadow: 0px 1px 3px 0px #eee;
}

.icon {
    position: relative;
    height: 1rem;
    top: 0.65rem;
    left: 0.5rem;
}

.link {
    color: $light_black;
    text-decoration: none;
}

#nav li {
    position: relative;
    height: 2.3rem;
    width: 4rem;
    line-height: 2.3rem;
    text-align: center;
    font-size: 0.8rem;
    font-weight: lighter;
    list-style: none;
}

#nav li.active {
    background-color: $orange;
    color: $middle_black;
}
</style>

