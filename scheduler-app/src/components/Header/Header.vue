<template>
    <header :class="{ 'scrolled-nav': scrollPosition }">
        <nav>
            <div class="branding">
                <router-link to="/"><img src="@/assets/scheduler_logo2.png" alt=""/></router-link>
            </div>
        </nav>  
        </header>
</template>

<style scoped>
    header {
        background-color: #bebebe;
        z-index: 99;
        width: 100%;
        position: fixed;
    }

    nav {
        position: relative;
        display: flex;
        flex-direction: row;
        padding: 10px 0;
        transition: .5s ease all;
        width: 95%;
        margin: 0 auto;
    }

    .branding {
        display: flex;
        align-items: center;
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