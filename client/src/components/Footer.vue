<template>
    <footer>
        <div class="ui container">
            <i class="copyright icon"></i>
            <p class="item">Desarrollado por EcoTripulantes | 2021 </p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss" scoped>
footer {
    position: relative;
    bottom: 0;
    height: 0;
    width: 100%;
}
.ui.container {
    background-color: purple;
    display: flex;
    justify-content: center;
    width: 100%;
    height: auto;
    .icon {
        color: whitesmoke;
    }
    .item {
        color: whitesmoke;
    }
}
</style>