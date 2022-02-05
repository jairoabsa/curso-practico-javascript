//const precioOriginal = 120;
//const descuento = 18;

function porcentuar(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) /100;

    return precioConDescuento;
}

const Coupons = [
    "klub",
    "kupon",
    "employ"
];

var discuento = 0;
var descuento = 0;

function calculardescuentocupon(){
    const InputCupon = document.getElementById("InputCupon");
    const CuponDisc = InputCupon.value;
    const CupDisc = document.getElementById("CuponDiscount");
    var cupondescuento = 0;

    if(!Coupons.includes(CuponDisc)){
    alert("El Cupon '" + CuponDisc + " ' que ingresaste no es valido");
    } else if(CuponDisc === "klub"){
        cupondescuento = 3;
    } else if(CuponDisc === "kupon"){
        cupondescuento = 4;
    } else if(CuponDisc === "employ"){
        cupondescuento = 5;
    };

    CupDisc.innerText = "El Descuento Adicional por tu Cupon es de: " + cupondescuento;
    return discuento = Number(cupondescuento);
};

function calcularPrecioFinal(){
    const precio = document.getElementById("InputPrice");
    const price = precio.value;
    const descuento = document.getElementById("InputDiscount");
    const discount = descuento.value;
    var both = Number(discount) + Number(discuento);
    
    const finalprice = Number(porcentuar(price, both));  
    const fprice = document.getElementById("FinalPrice");

    fprice.innerText = "El Precio a Pagar es: $" + finalprice;
}


//console.log("El precio original es " + precioOriginal)
// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioDescuento,
//     precioConDescuento
//     });