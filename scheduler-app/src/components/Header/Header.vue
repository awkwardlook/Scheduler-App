<template>
    <!-- weird gap at the top of login box cannot resolve --> 
    <header :class="{ 'scrolled-nav': scrollPosition }">
        <nav class="flexbox">
            <div class="branding">
                <router-link to="/"><img src="@/assets/scheduler_logo2.png" alt=""/></router-link>
            </div>
        </nav>  
        </header>
</template>

<style scoped>
    header {
        z-index: 99;
        width: 100%;
        position: fixed;
    }

    nav.flexbox {
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        margin: 0 auto;
        background-color: #bebebe;
        box-shadow: 0px 0px 10px 7px #5290adba;
    }

    .branding {
        display: flex;
        align-items: center;
        padding: 10px 20px;
    }

    .branding:hover {
        cursor: pointer;
    }

    img {
        width: 30px;
        transition: 0.5 ease all;
    }
</style>

<script>
    export default {
        name: "header",

    }
    
</script>