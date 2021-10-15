<template>
    <form @submit.prevent="setPublication()" class="ui form container">   
        <h2 class="ui dividing header">Publicar anuncios</h2>     
        <div class="fields">
            <div class="six wide field">
                <label>Seleccione tipo de material</label>
                <select class="ui fluid dropdown" id="mat" @change="selectMaterialType()">
                    <option value="">Tipo de material</option>
                    <option value="CA">Cartón</option>
                    <option value="PA">Papel</option>
                    <option value="PL">Plástico</option>
                    <option value="VI">Vidrio</option>
                </select>
            </div>
            <div class="ten wide field">
                <label>Insertar imagen</label>
                <input
                    type="file"
                    accept="image/png, image/jpeg"
                    multiple="true"
                    id="imageFile"
                    @change="saveImage()"
                >
            </div>
        </div>
        <div class="fields">
            <div class="four wide field">
                <label>Cantidad</label>
                <input type="number" placeholder="cant" v-model="quantity">
            </div>
            <div class="four wide field">
                <label>Unidades</label>
                <select class="ui fluid dropdown" id="unit">
                    <option value="UND">unidad</option>
                    <option value="TON">tonelada</option>
                    <option value="KGR">kilogramo</option>
                    <option value="LB">libra</option>
                </select>
            </div>
            <div class="eight wide field">
                <label>Periodicidad</label>
                <div class="fields">
                    <div class="seven wide field">
                        <input type="number" placeholder="#" v-model="frecuency">
                    </div>
                    <div class="nine wide field">
                        <select class="ui fluid dropdown" id="frec">
                            <option value="WEEK">semana</option>
                            <option value="MONTH">mes</option>
                            <option value="DAY">día</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <h4 class="ui dividing header">Ubicación</h4>
        <div class="fields">
            <div class="seven wide field">
                <label>Dirección</label>
                <input type="text" placeholder="Dirección" v-model="address">
            </div>
            <div class="nine wide field">
                <div class="two fields">
                    <div class="field">
                        <label>Ciudad</label>
                        <input type="text" placeholder="Ciudad" v-model="cityLoc">
                    </div>
                    <div class="field">
                        <label>Departamento</label>
                        <input type="text" placeholder="Departamento" v-model="deptLoc">
                    </div>
                </div>
            </div>
        </div>
        <h4 class="ui dividing header">Descripción</h4>
        <div class="field">
            <label>Descripción de lo que desea intercambiar</label>
            <textarea v-model="description">

            </textarea>
        </div>
        <div class="three ui buttons container">
            <button class="ui green button" @click="publish"><i class="check icon" type="submit"></i>Publicar</button>
            <button class="ui blue button" @click="publishImage"><i class="upload icon" type="submit"></i>Upload</button>
            <button class="ui red button"><i class="delete icon"></i>Cancelar</button>
        </div>
    </form>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import {
    setPublicationApi,
    upLoadImageApi,
    } from '../api/publish'

export default {
    name: 'Publish',
    props: {
        publicationForm: Object,
        quantity: Number,
        frecuency: Number,
        address: String,
        cityLoc: String,
        deptLoc: String,
        description: String,
    },
    setup(props) {
        let publishError = ref({});
        const router = useRouter();
        let imageData = [];
        let formData = new FormData();
        let material = '';
        let image = {};
        let publicationForm = {
            // materialType: Object,
            // prodImage: Object,
            // quantity: String,
            // frecuency: String,
            // address: String,
            // cityLoc: String,
            // deptLoc: String,
            // description: String,
        };
        
        const materialEnum = {
            mat1: 'paperBoard',
            mat2: 'paper',
            mat3: 'plastic',
            mat4: 'glass',
        };
        Object.freeze(materialEnum);
        
        const selectMaterialType = () => {
            material = document.getElementById("mat").selectedOptions[0].label;
            if(material === 'Plástico') {
                material = materialEnum.mat3;
            } else if(material === 'Cartón') {
                material = materialEnum.mat1;
            } else if(material === 'Vidrio') {
                material = materialEnum.mat4;
            } else if(material === 'Papel') {
                material = materialEnum.mat2;
            };
            console.log(material);
        };
        let saveImage = () => {
            image = document.getElementById("imageFile").files;
            for (let i = 0; i < image.length; i++) {
                let file = [image[i]];
                let blobImage = new Blob(file, {type: 'image/jpeg, image/png'});
                imageData['image-'+`${i}`] = {"name": blobImage, "related": ["6169ad78fd6128578cc8172a"]};
                formData.append('files.prodImage', blobImage,image[i].name);
                console.log(blobImage);
            };
            console.log(image);
            console.log(imageData);
        };
        let setPublication = () => {
            publicationForm["materialType"] = material;
            publicationForm["quantity"] = props.quantity + " " + document.getElementById("unit").selectedOptions[0].value;    
            publicationForm["frecuency"] = props.frecuency + " " + document.getElementById("frec").selectedOptions[0].label;
            publicationForm["address"] = props.address;
            publicationForm["cityLoc"] = props.cityLoc;
            publicationForm["deptLoc"] = props.deptLoc;
            publicationForm["description"] = props.description;
            publicationForm.prodImage = formData;
            console.log(publicationForm);
        };
        const publish = async () => {
            publishError.value = {};
            try {
                const response = await setPublicationApi(publicationForm);
                // throw new Error("Error al intentar escribir en la base de datos.", response);    
                // throw response;
                //alert(error.message);
                console.log(response);
            } catch (error) {
                    publishError.value = error;
                    console.log(publishError);
                    // window.alert(publishError.value);
            };
        };
        const publishImage = async () => {
            publishError.value = {};
            try {
                //let formData = new FormData(imageData);
                const resImage = await upLoadImageApi(imageData);
                // throw new Error("Error al intentar escribir en la base de datos.", response);    
                // throw response;
                //alert(error.message);
                console.log(resImage);
            } catch (error) {
                    publishError.value = error;
                    console.log(publishError);
                    throw(error);
                    // window.alert(publishError.value);
            };
        };
        return {
            setPublication,
            publicationForm,
            saveImage,
            imageData,
            formData,
            image,
            selectMaterialType,
            material,
            publish,
            publishImage,
            publishError,
        };
    }

}
</script>

<style lang="scss" scoped>
form {
    //background-color: pink;
    padding: 20px;
    margin: 10px;
    
    .two.ui {
    width: 50%;
    margin: 15px;

}
}
.ui.form {
    max-width: auto !important;
    input.error {
        border-color: #faa;
        background-color: #ffeded;
    }
}

</style>