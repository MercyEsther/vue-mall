<template>
<div id="search">
    <form action="#" method="get">
        <div class="iconWrapper">
            <img src="static/icon.png" alt="icon" class="icon">
        </div>
        <input type="text" placeholder="商品搜索" v-model="search"/>
        <div class="btnWrapper">
        <button type="submit"><img src="static/right.png" alt="right"></button>
        </div>
    </form>
</div>
</template>

<script>
export default {
    name: 'search',
    data() {
        return {
            search: ''
        }
    }
}
</script>

<style scoped>
@import url(../css/common.css);

#search {
    position: relative;
    width: 100%;
    height: 2.5rem;
    background-color: $light_grey;
}

form {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}

.iconWrapper {
    position: relative;
    flex: 0 1 25%;
    height: 1rem;
    text-align: center;
}

.icon {
    position: relative;
    height: 1rem;
}

input {
    position: relative;
    flex: 0 1 50%;
    height: 1.8rem;
    padding-left: 1rem;
    font-size: 0.8rem;
    border-radius: 0px;
    box-shadow: none;
    border: 1px solid #ddd;
    background-color: white;
}

input::-moz-placeholder {
    color: #a2a2a2;
    font-weight: lighter;;
}
input::-webkit-input-placeholder {
    color: #a2a2a2;
    font-weight: lighter;
}

.btnWrapper {
    position: relative;
    flex: 0 1 25%;
    height: 1.8rem;
}

button {
    position: absolute;
    right: 1rem;
    width: 3rem;
    height: 100%;
    border: 1px solid $middle_grey;
    background-color: white;
}

button img {
    position: relative;
    height: 1rem;
    top: 0.15rem;
}
</style>

