/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:

   return string
}

console.log(devolverString("Hola mundo"));

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:

   return x + y
}

console.log(suma(3 , 5));

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:

   return x - y

}

console.log(resta(4, 9));

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:

   return x / y

}

console.log(divide(56 , 5));

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:

   return x * y
}

console.log(multiplica(3,7));

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   return x % y
}

console.log(obtenerResto(55,2));

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
