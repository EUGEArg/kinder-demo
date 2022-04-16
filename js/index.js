const btnFront = document.getElementById("btn-front");
const btnBack = document.getElementById("btn-back");
let numero = 1;


const adelantar = () => {
    numero++;
    if(numero > 8){
        numero = 1;
    }
    let img = document.getElementById("img-gallery");
    img.src = './assets/images/galeria/img' + numero + '.jpg';
};

const retroceder = () => {
    numero--;
    if(numero < 1){
        numero = 8;
    }
    let img = document.getElementById("img-gallery");
    img.src = './assets/images/galeria/img' + numero + '.jpg';
};

btnFront.addEventListener("click", () => {
     adelantar();
     console.log(numero);
});

btnBack.addEventListener("click", () => {
    retroceder();
    console.log(numero);
});
