<template>
    <div class="card">
        <div class="content-fluid">
            <div class="header">
                <i class="user icon"/>
                user name
            </div>
            <div class="meta">
                <i class="recycle icon"></i>
                user role
            </div>
            <div class="container">
                <div class="image card ui col-1">
                    <div class="ui column" v-for="image in publication.prodImage" :key="image._id">
                        <img class="medium ui image" type="image" :src="API_URL + image.url" :alt="publication.materialType">
                    </div>
                </div>
                <div class="description card ui col-2">
                    <table class="ui celled table">
                        <tbody>
                            <tr>
                                <td><strong>Tipo de material</strong></td>
                                <td>{{ publication.materialType }}</td>
                            </tr>
                            <tr>
                                <td><strong>Cantidad</strong></td>
                                <td>{{ publication.quantity }}</td>
                            </tr>
                            <tr>
                                <td><strong>Periodicidad</strong></td>
                                <td>{{ publication.frecuency }}</td>
                            </tr>
                            <tr>
                                <td><strong>Dirección</strong></td>
                                <td>{{ publication.address }}</td>
                            </tr>
                            <tr>
                                <td><strong>Departamento</strong></td>
                                <td>{{ publication.deptLoc }}</td>
                            </tr>
                            <tr>
                                <td><strong>Ciudad</strong></td>
                                <td>{{ publication.cityLoc }}</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>Descripción</h4>
                    <p>{{ publication.description }}</p>
                </div>
            </div>
            <div class="container">
                <div class="left floated col">
                    <i class="heart outline like icon"></i>
                    <i class="add icon"></i>
                </div>
                <div type="right floated col">
                    <i class="trash icon ui" @click="deletePublication(publication._id)"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { API_URL } from '../utils/constants';
import { useRouter } from 'vue-router';
import { deletePublicationApi } from '../api/publish';
export default {
    name: 'Publications',
    props: {
        publication: Object,
    },
    
    setup(props) {
        // const getPublications = (idPublication) => {
        //     getPublicationsApi(idPublication);
        // };
        const router = new useRouter();
        const deletePublication = async (id) => {
            try {
                const response = await deletePublicationApi(id);
                console.log("La publicación se ha eliminado", response);
            } catch (error) {
                console.log("Ocurrió un error en el proceso...", error.statusCode)
            };
            return id;
            
        };
        
        return {
            API_URL,
            deletePublication,
        }
    },
    onload() {
        return deletePublication;
        }
}
</script>

<style lang="scss" scoped>
.card {
    margin: 20px;
    padding: 20px;
    border: 2px solid purple;
    border-radius: 10px;
    .container {
        display: flex;
        flex-direction: row;
        align-items: center;
        .col-1 {
            width: 30%;
        }
        .col-2 {
            width: 70%;
        }
    }
}
p, h4 {
    margin: 10px;
    padding: 10px;
}
</style>