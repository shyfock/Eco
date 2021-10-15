import { API_URL } from "../utils/constants";

export async function getPublications(limit = 1000) {
    try {
        const response = await fetch(//html
            `${API_URL}/publications?_sort=created_at:desc&_limit=${limit}`
        );
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
    
}

// export function getPublicationsApi(idPublication) {
//     const publications = 
// }

export async function setPublicationApi (publicationForm) {
    try {
        const url = /* html */`${API_URL}/publications`;
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(publicationForm),
        };
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    };
}

export async function upLoadImageApi (imageDataForm) {
    try {
        const url = /* html */`${API_URL}/upload/`;
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data",
            },
            body: JSON.stringify(imageDataForm),
        };
        const response = await fetch(url, params);
        const result = await response.json();
        console.log(result)
        return result;
        
    } catch (error) {
        console.log(error);
        return null;
    };
}

export async function deletePublicationApi(idPublication) {
    //const idPublication = publicationForm._id;
    try {
        // const pub = await publications.findByIdAndDelete({idPublication});
        // if (!pub) {
        //     return console.log(
        //         'No se encontró el id indicado'
        //     )
        // } else {
            const url = /*html*/`${API_URL}/publications/${idPublication}`;
            const params = {
                method: "DELETE",
                header: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(idPublication),
            };
            const response = await fetch(url, params);
            const result = await response.json();
            return result;
        // }   
    } catch (error) {
        return console.log('Ocurrió un error', error)
    }
}