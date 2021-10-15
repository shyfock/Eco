<template>
    <div class="basic-layout">
        <Menu/>
        <div class="container">
            <slot/>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Menu from '../components/Menu.vue'
import Footer from '../components/Footer.vue'

export default {
    name: 'BasicLayout',
    components: {
        Menu,
        Footer,
    }
}
</script>

<style lang="scss" scoped>
.basic-layout {
    position: relative;
}
Footer {
    position: absolute;
    bottom: 0;
    height: 0;
    width: 100%;
}

</style>