// CLOUSURE

// ALgo que está dispobible 
// Definición: Una clausura No es aconsejable crear innecesariamente funciones dentro de otras funciones si no se necesitan los closures para una tarea particular ya que afectará negativamente el rendimiento del script tanto en consumo de memoria como en velocidad de procesamiento.

// Un closure es cuando una función es capaz de recordar y acceder a un lexical scope, incluso cuando la función es ejecutada por fuera del lexical scope.

//  Las clausuras se crean cada vez que una función es creada.
    
// Cada closure tiene su propio entorno
// Nos permiten emular métodos privados (Ex: JAVA)
// Utilizar closures de este modo proporciona una serie de beneficios que se asocian normalmente con la programación orientada a objectos, en particular la encapsulación y la ocultación de datos.
// Los métodos privados no son sólo útiles para restringir el acceso al código: también proporcionan una poderosa manera de administrar tu espacio de nombres global, evitando que los métodos no esenciales embrollen la interfaz pública de tu código.

// Rendimiento
// No es aconsejable crear innecesariamente funciones dentro de otras funciones si no se necesitan los closures para una tarea particular ya que afectará negativamente el rendimiento del script tanto en consumo de memoria como en velocidad de procesamiento.



// return value vs return function

// EX 1

// function iniciar() {
//     let nombre = "Mozilla";  // La variable nombre es una variable local creada por iniciar.
//     function mostrarNombre() {  // La función mostrarNombre es una función interna, una clausura.
//         console.log(nombre);  // Usa una variable declarada en la función externa.
//     }
//     mostrarNombre();
// }
// iniciar();

// EX 2

// function creaFunc() {
//     let nombre = "Mozilla";
//     function muestraNombre() {
//         // console.log(nombre);
//         return 'hola';
//     }
//     return muestraNombre;
// }

// let result = creaFunc();

// console.log(result());

// EX 3

// function creaSumador(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// let sumaA = creaSumador(2);
// console.log(suma5(10));

// let sumaB = creaSumador(1);
// console.log(sumaB(8));


// EX 4: Emulando métodos privados con closures : (Patrón Módulo)
// (El patrón módulo consiste en un módulo donde se encapsulará toda la lógica de nuestra aplicación o proyecto. Dentro de este módulo estarán declaradas todas las variables o funciones privadas y sólo serán visibles dentro del mismo).


// let Counter = (function() {
//     let privateCounter = 0;
//     function changeBy(val) {
//       privateCounter += val;
//     }
//     return {
//       increment: function() {
//         changeBy(1);
//       },
//       decrement: function() {
//         changeBy(-1);
//       },
//       value: function() {
//         return privateCounter;
//       }
//     }
//   })();
// console.log(Counter.value()) 
// Counter.increment();
// Counter.increment();
// Counter.increment();
// Counter.increment();
// Counter.increment();
// console.log(Counter.value())
// Counter.decrement();
// Counter.decrement();
// console.log(Counter.value())


let sum = x => {
  return y =>  x + y;
}

console.log(sum(1)(2));

