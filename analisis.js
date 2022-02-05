
//Helpers "nombre que se le asigana a funciones que no son parte de la logica de negocio, pero son necesarias"
function esPar(numero){
    // if (numero % 2 === 0 ) {
    //     return true;
    // } else { 
    //     return false;
    // }
    return (numero % 2 === 0);
}

function calcularPromediolista1(lista){
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
          }
      );
      const promedioLista = sumaLista / lista.length;
      return promedioLista;
}

//Calculadora de Mediana
function medianaSalarios(lista) {
    const mitad = parseInt(lista.lenght / 2);

    if(esPar(lista.lenght)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularPromediolista1([personaMitad1], [personaMitad2]);
        return mediana;
    } else {
        const mitadpersona = lista[mitad];
        return mitadpersona;
    }
};

//Mediana General
const salariosgt = Guatemala.map(
    function (salarypersona) {
        return salarypersona.sueldo;
    }
);

const salariosgtsorted = salariosgt.sort(
    function (salarioA, salarioB){
        return salarioA - salarioB;
    }
);

const medianaGeneralgt = medianaSalarios(salariosgtsorted);

//Mediana Salarios TOP 10
const spliceStart = (salariosgtsorted.length * 90) / 100;
const spliceEnds = (salariosgtsorted.length - spliceStart);

const salariosgtTop10 = salariosgtsorted.splice(
  spliceStart,
  spliceEnds,
  );

const medianaTop10gt = calcularPromediolista1(salariosgtTop10);

console.log({
    medianaGeneralgt,
    medianaTop10gt,
});

/*
// Helpers
function esPar(numerito) {
    return (numerito % 2 === 0);
  }
  
  function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }
  
  // Calculadora de mediana
  function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);
  
    if (esPar(lista.length)) {
      const personitaMitad1 = lista[mitad - 1];
      const personitaMitad2 = lista[mitad];
  
      const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
      return mediana;
    } else {
      const personitaMitad = lista[mitad];
      return personitaMitad;
    }
  }
  
  // Mediana General
  const salariosGt = Guatemala.map(
    function (personita) {
      return personita.salary;
    }
  );
  
  const salariosGTSorted = salariosGt.sort(
    function (salaryA, salaryB) {
      return salaryA - salaryB;
    }
  );
  
  const medianaGeneralGt = medianaSalarios(salariosGTSorted);
  
  // Mediana del top 10%
  const spliceStart = (salariosGTSorted.length * 90) / 100;
  const spliceCount = salariosGTSorted.length - spliceStart;
  
  const salariosGtTop10 = salariosGTSorted.splice(
    spliceStart,
    spliceCount,
  );
  
  const medianaTop10Gt = medianaSalarios(salariosGtTop10);
  
  console.log({
    medianaGeneralGt,
    medianaTop10Gt,
  });
*/