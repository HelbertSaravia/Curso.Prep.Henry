// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  console.log(array[0]);
  return array[0]
}
devolverPrimerElemento([3,4,5,6,7,8]);

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  console.log(array[array.length-1]);
  return array[array.length-1];
}
devolverUltimoElemento(["albert","pedro","julio","tito","pedrote","carlos"]);


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  console.log(array.length);
  return array.length;
}
obtenerLargoDelArray([1,2,3,4,5,6,7,8,9]);

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  //var array=[1,2,3,4,5,6];
  for (let i=0; i<array.length; i++){
    array[i]=array[i]+1;
  }
  console.log(array);
  return array;
}
incrementarPorUno([2,4,6,8,10]);

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  //var array=[1,2,3,4,5];
  array.push(elemento);
  console.log(array);
  return array;
}

agregarItemAlFinalDelArray([1,2,3,4,5], "pipo");

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  console.log(array);
  return array;
}
agregarItemAlComienzoDelArray(["a","b","c","d"],23);


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
 
  var a=palabras.join(" ");
  console.log(a);
  return a;
}
dePalabrasAFrase(["Hello", "world!"]);


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
 if(array.includes(elemento)){
  console.log (true);
  return true;
 }
 else {
  console.log (false);
  return false;
 }

}  


arrayContiene(["a","b","c","d"], "z");

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma=0;
  
  for (i=0; i<numeros.length;i++){
    suma= suma +numeros[i];
  }
  console.log(suma); return suma;

}

agregarNumeros([2,4,6,8,10]);

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var promedio=0;
  var suma=0;
  for (i=0; i<resultadosTest.length; i++){
    suma=suma+resultadosTest[i];
  }
  promedio=suma/resultadosTest.length;
  console.log(promedio);
  return promedio;
}

promedioResultadosTest([18,15,17,13,12]);


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var b=1;   
  for(let i=0;i<numeros.length;i++){
    
      for (let a=0; numeros[i]>=numeros[a]; a++){

        if(a>(numeros.length-2)){

          console.log(numeros[i]);
          return numeros[i];
        }    
      }
        }

   
   
}
numeroMasGrande([800,5,101,9,7,1110]);

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
 if(arguments.length<1){
    console.log(0);
    return 0;
  }
  var total=1;
  for (let i=0; i<arguments.length;i++){
    total=total*arguments[i];
    console.log(total)
    
  }
 return total;

}

multiplicarArgumentos(1,2,3,4,5,6);

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var a=0;
  for (let i=0; i<arreglo.length;i++){
    if(arreglo[i]>18){
      a++;
    }
  }
  console.log(a);
  return a;

}
cuentoElementos([23,12,25,10,8,18,34]);

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  var dia=[1,2,3,4,5,6,7];

  if(numeroDeDia===dia[0]||numeroDeDia===dia[6]){
    console.log("Es fin de semana");
    return "Es fin de semana";
  }
  else{
    console.log("Es día Laboral");
    return "Es dia Laboral";
  }

} 


diaDeLaSemana(7);



function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí

 

  var b=10;
  for(i=1;n>9;i++){
    n=n/10;
    n=Math.floor(n);
  }
  if(n===9){
    console.log(true);
    return true;
  }
  else{
    console.log(false);
    return false;
  }
    

}


empiezaConNueve(91345)


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  var suma=0;
  var div=0;
  for(let i=0; i<arreglo.length; i++){
    suma=suma+arreglo[i];

  }
  div=suma/(arreglo.length);
  
  if(div===arreglo[0]){
    console.log(true);
    return true;
  }
  else{
    console.log(false);
    return false
  }

  
} 

todosIguales([3,3,3,3,3]);


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevoarray=[];
  for(let i=0; i<array.length; i++){
    switch(array[i]){
      
      case "Marzo": var a= array[i]; break;
      case "Noviembre": var b=array[i]; break;
      case "Enero": var c =array[i]; break;
    }
  }

  if(a==="Marzo"&&b==="Noviembre"&&c==="Enero"){
    nuevoarray=[a,b,c];
    console.log(nuevoarray);
    return nuevoarray;
  }
  else{
    
    console.log("No se encontraron los meses pedidos");
    return "No se encontraron los meses pedidos";
  }
}
mesesDelAño(["Noviembre","Febrero","Marzo","Enero","Setiembre","Agosto"]);

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var recorrer=[];

    
    for (let a=0;a<array.length;a++){
      if(array[a]>100){

        recorrer.push(array[a]);
      }
    }
    
    console.log(recorrer);
    return recorrer;
  }

mayorACien([23,45,123,124]);

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:


  var array=[];
  var suma=numero;
  var contador=1



  for(let i=0;i<10;i++){
    suma=suma+2;
    array.push(suma);
    if(suma===contador){
      break;
    }
    contador++;

 }
    if(contador===suma){
            console.log("Se interrumpió la ejecución");
      return "Se interrumpió la ejecución";
    }

    else{   
       
       console.log (array);
      return array;
 
  }
}
breakStatement(4);


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

  var array=[];
  var suma=numero;
  
  for(let i=0;i<10;i++){
    
    
    if(i===4){


      continue;

    }
    
      suma=suma+2;
    array.push(suma);
    
  }

  console.log(array);
  return array;

}
continueStatement(8)

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
