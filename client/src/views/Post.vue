<template>
    <BasicLayout>
        <div class="container-fluid ui item">
            <div class="left container ui">
                <button  class="huge ui button" id="publish" @click="showPublish()">Publicar anuncios</button>
                <button  class="huge ui button" @click="showPublication()">Ver anuncios</button>
            </div>
            <div class="divider ui"></div>
            <div class="container ui">
                <Publish v-if="showPublishForm"/>
                <div v-for="publication in publications" :key="publication._id">
                    <Publications v-if="showPublicationForm" :id="publication._id" :publication="publication"/>
                </div>
            </div>
        </div>
    </BasicLayout>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import BasicLayout from '../layouts/BasicLayout.vue'
import Publish from '../components/Publish.vue'
import Publications from '../components/Publications.vue'
import { getPublications } from '../api/publish'

export default {
    name: 'Post',
    components: {
        BasicLayout,
        Publish,
        Publications,
    },
    props: {
        showPublish: Function,
        showPublication: Function,
    },
    setup() {
        let publications = ref(null);
        const store = useStore();
        const showPublishForm = computed(
            () => store.state.showPublishForm
        );
        const showPublicationForm = computed(
            () => store.state.showPublicationForm
        );
        const showPublish = () => {
            store.commit('setShowPublishForm', true)
            store.commit('setShowPublicationForm', false)
            //console.log('Mostrar Publicaciones', showPublicationForm)
        };
        const showPublication = () => {
            store.commit('setShowPublishForm', false)
            store.commit('setShowPublicationForm', true)
            //console.log('Publicar anuncio', showPublicationForm)
        };
        onMounted(async () => {
            const response = await getPublications(20);
            publications.value = response;
            
        })
        return {
            showPublish,
            showPublication,
            showPublishForm,
            showPublicationForm,
            publications,
        };
    },

}

</script>

<style lang="scss" scoped>
.ui.item {
    display: flex;
    flex-flow: column;
    .left {
        display: flex;
        flex-flow: row;
        justify-content: center;
        margin: 10px;
        .button {
            width: 40%;
            margin: 10px;
        }
    }
    .right {
        display: flex;
        flex-flow: row;
        justify-content: center;
    }
}
</style>