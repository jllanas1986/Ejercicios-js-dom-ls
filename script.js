//Ejercicios Condiciones y Objetos/Arrays

//Crea un objeto en la variable ordenador de tal modo que el siguiente código no muestre por consola 'suspendes':

let ordenador = {
    marca: 'Asus',
    tipo: 'portátil',
    perifericos: {
        touchpad: true,
    },
    almacenamiento: {
        discos: ['SSD', 'CD']
    },
    procesador: {
        velocidad: "2.5 GHz"
    }
}

// TEST 1
  if (typeof ordenador === "object") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }

  // TEST 2
  if (ordenador.marca === "Asus") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
 
  // TEST 3
  if (ordenador.tipo === "portátil") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
 
  // TEST 4
  if (ordenador.perifericos.touchpad === true) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
 
  // TEST 5
  if (ordenador.almacenamiento.discos[0] === "SSD") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
 
  // TEST 6
  if (ordenador.procesador.velocidad === "2.5 GHz") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }


//Imprimir los números del 21 al 34 en la consola.
let printNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]
for (let i = 20; i < printNumbers.length; i++) {
    console.log(printNumbers[i]);
}

//Sumar los números del 1 al 10 y mostrar el resultado en la consola.
let resultado = 0;
let i = 0;
while (i <= 10) {
    resultado += i;
    i++;
}
console.log(resultado);

//Dado un array de números, imprimir en la consola la suma de todos los números.
let arrayNumbers = [1,2,3,4,5]
let suma = 0;
for (const iterator of arrayNumbers) {
    suma += iterator
}
console.log(suma);


//Dado un número, encontrar su factorial.
let numeroFactorial = 5;
for (let i = numeroFactorial - 1; i > 0; i--) {
    numeroFactorial *= i;
    
}
console.log(numeroFactorial);



//Dado un array de números, imprimir en la consola solo los números impares.
let arrayNumeros = [1,2,3,4,5,6]
for (let i = 0; i < arrayNumeros.length; i++) {
    if (arrayNumeros[i] % 2 !== 0) {
        console.log(arrayNumeros[i]);
    }
}


//Dado un array de objetos con propiedades "nombre" y "edad", imprimir en la consola solo los nombres de las personas mayores de 18 años.
let peopleAge = [
    {name: 'Andres', age: 25},
    {name: 'Diana', age: 18},
    {name: 'Jaime', age: 19},
    {name: 'Maria', age: 15}
];

for (let i = 0; i < peopleAge.length; i++) {
    if (peopleAge[i].age > 18)
        console.log(peopleAge[i].age);
}

//Dado un número, imprimir en la consola si es primo o no.
/*let number = 6;
let yesPrimo = true
for (let i = 0; i <= number; i++) {
    if (number % i === 0) {
    yesPrimo = false
    }
}

if(yesPrimo) {
    console.log('no es primo');
} else {
    console.log('es primo');
}*/

let number = 1
let esPrimo = true
for(let i = 2; i < number/2 + 1; i++){
    if(number % i === 0){
        esPrimo = false
    }
}
if(esPrimo){
    console.log("Es primo")
}else{
    console.log("No es primo")
}

//Utiliza la siguiente array para resolver los próximos ejercicios:

let animales = [
    {
      nombre: "León",
      especie: "Felino",
      edad: 6,
    },
    {
      nombre: "Cebra",
      especie: "Herbívoro",
      edad: 4,
    },
    {
      nombre: "Tigre",
      especie: "Felino",
      edad: 3,
    },
    {
      nombre: "Elefante",
      especie: "Herbívoro",
      edad: 8,
    },
    {
      nombre: "Jirafa",
      especie: "Herbívoro",
      edad: 5,
    },
    {
      nombre: "Oso",
      especie: "Omnívoro",
      edad: 2,
    },
    {
      nombre: "Pingüino",
      especie: "Ave",
      edad: 1,
    },
  ];

//Crea un array con los animales que son felinos y mayores de 4 años. No utilices el método filter de las arrays y muéstralo por consola.
let felinosAnimals = []
for (const animal of animales) {
  if (animal.especie === 'Felino' && animal.edad > 4) {
    felinosAnimals.push(animal)
    console.log(felinosAnimals);
  }
}

//Crea un array con los animales que son herbívoros y tienen una edad par. No utilices el método filter de las arrays y muéstralo por consola.

let animalesHerbivoros = []
for (const animal of animales) {
    if (animal.especie === 'Herbívoro' && animal.edad % 2 === 0) {
        animalesHerbivoros.push(animal);   
    }
}
console.log(animalesHerbivoros);




//Crea un array con los animales que son omnívoros o aves y menores de 3 años. No utilices el método filter de las arrays y muéstralo por consola.
let omnivorosOaves = []
for (const animal of animales) {
    if (animal.especie === '' && animal.edad % 2 === 0) {
        animalesHerbivoros.push(animal);   
    }
}
console.log(animalesHerbivoros);

//Crea un array con los animales que su especie empieza por "H". No utilices el método filter de las arrays y muéstralo por consola.

//Crea un array con los animales cuyo nombre tenga más de 4 letras y su especie sea felino o herbívoro. No utilices el método filter de las arrays y muéstralo por consola.
