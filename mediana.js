function calcularPomediolista1(lista){
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

let lista1 = [];
let listainput;

lista1.sort()
let mitadLista1 = parseInt(lista1.length / 2);

function esPar(parametro) {
    if(parametro % 2 === 0) {
        return true;
    } else {
        return false;
    }
};
let mediana = lista1[mitadLista1];

if (esPar(lista1.length)){
    const elemento1 = lista1[mitadLista1- 1]; //retrocedemos una posicion porque el array [] empieza en cero
    const elemento2 = lista1[mitadLista1];
    const promedioelemento1y2 = calcularPomediolista1([elemento1, elemento2])
    const mediana = promedioelemento1y2;
} else {
    const mediana = lista1[mitadLista1];
    //posicion de la mitad de la lista1 es mediana
}