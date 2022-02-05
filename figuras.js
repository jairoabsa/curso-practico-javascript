// Codigo del Cuadrado
console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log("Lados del cuadrado: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
}
perimetroCuadrado()
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");


function areaCuadrado(lado){
    return area = lado * lado;
}
// console.log("El area cuadrada del cuadrado es: " + areaCuadrado + "cm^2")
console.groupEnd();

// Codigo del Triangulo
console.group("Triangulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
// const alturaTriangulo = 5;

// console.log("Los lados del Triangulo miden: "
//     + lado1
//     + "cm, "
//     + lado2 
//     + "cm, "
//     + base
//     + "cm, "
//     + altura
//     + "cm."
// );

function perimetroTriangulo(base, lado1, lado2){
    return (base + lado1 + lado2);
}
// console.log("El perimetro del Triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura){
    return ((base * altura) / 2);
}
// console.log("El area del Triangulo es: " + areaTriangulo + "cm")
console.groupEnd();

function alturaTriangulo(base, lado1, lado2){
    if (lado1 == lado2 && lado1 != base){
        return Math.sqrt((Math.pow(lado1, 2))-(Math.pow(base/2, 2)));
    }
    else{
        alert("este no es un tiangulo isoceles");
    }
}
// console.log("la altura del triangulo es: " alturaTriangulo + "cm");

//Circulo
console.group("Circulos");
//radio
// function radioCirculo(radio){
//     return radio;
// }
// // console.log("El radio del circulo es: " + radioCirculo + "cm");
//diametro
function diametroCirculo(radio){
    return radio * 2;
}
// console.log("El diametro del circulo es: " + diametroCirculo + "cm");

//const PI = 3.14159265;
const PI = Math.PI;
console.log("PI es: " + PI);
//perimetro
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");
//area
function areaCirculo(radio){
    return (radio * radio) * PI;
}
// console.log("El area del circulo es: " + areaCirculo + "cm");
console.groupEnd();

//funciones para calcular Area y Perimetro del Cuadrado desde HTML

function calcularArea(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);

    alert("El Area del Cuadrado es " + area);
}

function calcularPerimetro(){
    const input = document.getElementById("InputCuadrado")
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    alert("El Perimetro del Cuadrado es " + perimetro);
}

//funciones para calcular Area, Altura y Perimetro del Triangulo desde HTML

function calcularAreaTriangulo(){
    const inputbaseTriangulo = document.getElementById("inputbaseTriangulo");
    const inputlado1Triangulo = document.getElementById("inputlado1Triangulo");
    const inputlado2Triangulo = document.getElementById("inputlado2Triangulo");
    const valuebase = inputbaseTriangulo.value;
    const valuelado1 = inputlado1Triangulo.value;
    const valuelado2 = inputlado2Triangulo.value;
    const altura = alturaTriangulo(valuebase, valuelado1,valuelado2);
    const area = areaTriangulo(valuebase, altura);

    alert("El Area del Triangulo es " + area)
}

function calcularPerimetroTriangulo(){
    const inputbaseTriangulo = document.getElementById("inputbaseTriangulo");
    const inputlado1Triangulo = document.getElementById("inputlado1Triangulo");
    const inputlado2Triangulo = document.getElementById("inputlado2Triangulo");
    const valuebase = Number(inputbaseTriangulo.value);
    const valuelado1 = Number(inputlado1Triangulo.value);
    const valuelado2 = Number(inputlado2Triangulo.value);

    const perimetro = perimetroTriangulo(valuebase, valuelado1, valuelado2);

    alert("El Perimetro del Triangulo es " + perimetro)
}

function calcularAlturaTriangulo(){
    const inputbaseTriangulo = document.getElementById("inputbaseTriangulo");
    const inputlado1Triangulo = document.getElementById("inputlado1Triangulo");
    const inputlado2Triangulo = document.getElementById("inputlado2Triangulo");
    const valuebase = inputbaseTriangulo.value;
    const valuelado1 = inputlado1Triangulo.value;
    const valuelado2 = inputlado2Triangulo.value;


    const altura1 = alturaTriangulo(valuebase, valuelado1, valuelado2);
    alert("La Altura del Triangulo es " + altura1)
}

//funciones para calcular diametro, perimetro y area del Circulo desde HTMLS

function CalcularDiametroCirculo(){
    const inputRadioCirculo = document.getElementById("inputRadioCirculo");
    const radio = inputRadioCirculo.value;

    const diametrodelCirculo = diametroCirculo(radio);
    alert("El Diametro del Circulo es " + diametrodelCirculo)
}

function CalcularPerimetroCirculo(){
    const inputRadioCirculo = document.getElementById("inputRadioCirculo");
    const radio = inputRadioCirculo.value;

    const perimetrodelCirculo = perimetroCirculo(radio);
    alert("El Perimetro del Circulo es " + perimetrodelCirculo)
}

function CalcularAreaCirculo(){
    const inputRadioCirculo = document.getElementById("inputRadioCirculo");
    const radio = inputRadioCirculo.value;

    const areadelCirculo = areaCirculo(radio);
    alert("El Area del Circulo es " + areadelCirculo)
}