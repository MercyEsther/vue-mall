<template>
<div id="footer">
    <div class="row">
        <span>author: HuangYH</span> 
        <a href="https://github.com/MercyEsther"><i class="fa fa-github"></i>MercyEsthrer</a>
    </div>
    <span>-- 2017-12-12 --</span>
</div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style scoped>
@import url(../css/common.css);

#footer {
    position: absolute;
    width: 100%;
    height: 6rem;
    bottom: 0;
    padding: 1rem 0px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: $orange;
}

#footer span {
    font-size: 0.75rem;
    font-weight: lighter;
    color: $middle_black;
}

.row span {
    margin-right: 1rem;
}

#footer a {
    font-weight: lighter;
    font-size: 0.75rem;
    color: $middle_black;
}

#footer a:hover {
    cursor: pointer;
}
</style>

