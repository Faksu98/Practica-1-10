const ORDEN_ARCHIVO = 1;
const ORDEN_AZKABAN = 2;
const ORDEN_MARAVILLAS = 3;

const IMG_ARCHIVO = "https://http2.mlstatic.com/D_NQ_NP_755380-MLA43506856536_092020-O.webp";
const IMG_AZKABAN = "https://images.cdn1.buscalibre.com/fit-in/360x360/21/1c/211c662f7b210b416856c3cfd3820595.jpg";
const IMG_MARAVILLAS = "https://images.cdn1.buscalibre.com/fit-in/360x360/42/7f/427f18ddc9cb21b5d943a63517df875a.jpg";

function mandarOrden(id){
    switch (Number(id)){
        case ORDEN_ARCHIVO:
            document.querySelector('#orden').innerHTML=`
                <h2>Odern Palabras radiantes</h2>
                <img src=${IMG_ARCHIVO} alt="imagen de palabras radiantes" tittle="palabras radiantes">
                `;
            break;
        case ORDEN_AZKABAN:
            document.querySelector('#orden').innerHTML=`
                <h2>Odern Prisionero de Azkaban</h2>
                <img src=${IMG_AZKABAN} alt="imagen de palabras radiantes" tittle="palabras radiantes">
                `;
            break;
        case ORDEN_MARAVILLAS:
            document.querySelector('#orden').innerHTML=`
                <h2>Odern Alicia en el pais de las maravillas</h2>
                <img src=${IMG_MARAVILLAS} alt="imagen de palabras radiantes" tittle="palabras radiantes">
                `;
            break;
        default:
    }
}