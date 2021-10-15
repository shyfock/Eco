<template>
    <div class="ui secondary menu">
        <!-- <div class="ui container fluid"> -->
            <div class="ui tabular menu">
                <router-link class="item" to='/'>
                    <img class="ui small image" src="../assets/logo.png" alt="EcoTripulantes">
                </router-link>
                <router-link class="item" to="/">
                    Inicio
                </router-link>
                <p class="item">
                    Información
                </p>
                <p class="item">
                    Perfil
                </p>
                <router-link class="item" to="/chat">
                    Chat
                </router-link>
                <router-link class="item" to="/post">
                    Anuncios
                </router-link>
            </div>
            <div class="right menu item">
                
                <router-link class="item" to="/login">
                    <i class="user icon"></i>
                    <p>Iniciar sesión</p>
                </router-link>
            </div>
        <!-- </div> -->
    </div>
   <!-- <header class="header">
            <img class="" src="../assets/logo.png" alt="">
            <div class="ui tabular menu">
                <nav class="navbar navbar-inverse box-shadow navbar-light justify-content-end" id="headerCustom">
                    <ul class="nav   lista">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="Index.html">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="ZUInformacion.html">Información</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Datos de Perfil</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="chat_y_anuncios.html">Chat y Anuncios</a>
                        </li>
                        <li class="nav-item profile">
                            <a href="">
                                <i class="bi bi-person-circle"></i>
                                <p class="display-7 login">Iniciar Sesión</p>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>  -->
</template>

<script>
export default {
    name: 'Menu'
}
</script>

<style lang="scss" scoped>
.ui.menu.secondary {
    background-color: purple ;
    .item {
        color: white;
        &:hover {
            color: deeppink;
        }
    }
    .ui.image {
        width: 60px;
        height: 60px;
    }
}

</style>