// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let arr1 = [];
  let arr2 = [];
  for (const prop in objeto) {
    arr1.push(prop);
    arr1.push(objeto[prop]);
    arr2.push(arr1);
    arr1 = [];
  }
  return arr2;
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí
  let obj = {};
  for (let i = 0; i < string.length; i++) {
    if (obj[string[i]] >= 1) {
      obj[string[i]]++;
    } else {
      obj[string[i]] = 1;
    }
  }
  return obj;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let may = "";
  let min = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i].toUpperCase() === s[i]) {
      may = may + s[i];
    } else {
      min = min + s[i];
    }
  }
  total = may + min;
  return total;
}

function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let arr1 = [];
  let arr2 = [];
  let a = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " " || i === str.length - 1) {
      if (str[i] !== " ") {
        arr1.unshift(str[i]);
      } else if (str[i] === " ") {
        arr1.push(str[i]);
      }
      for (let j = 0; j < arr1.length; j++) {
        arr2.push(arr1[j]);
        if (j === arr1.length - 1) {
          arr1 = [];
        }
      }
    } else if (str[i] !== " ") {
      arr1.unshift(str[i]);
    }
  }
  for (let q = 0; q < arr2.length; q++) {
    a = a + arr2[q];
  }
  return a;
}

function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let str2 = "";
  let str = numero.toString();
  for (let i = 0; i < str.length; i++) {
    str2 = str[i] + str2;
  }
  if (str === str2) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}

function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let str = "";
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c") {
      str = str + cadena[i];
    }
  }
  return str;
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let arrF = arr.sort((a, b) => a.length - b.length);
  return arrF;
}

function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  let filteredArray = arreglo1.filter((value) => arreglo2.includes(value));
  if (filteredArray === []) {
    return filteredArray;
  } else {
    return filteredArray;
  }
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
