//Nombre y Apellido:axel carrion
//Curso: 6c
//Grupo:606
//Taller de Programacion III
//Departamento de Informatica - EESTn°1 - Raul Scalabrini Ortiz

// Trabajo Practico N°1

// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// En estas primeras 6 preguntas, reemplaza null por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Hola" ;

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 25 ;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  return str;
}

function suma(x, y) {
  // Suma "x" e "y" juntos y devuelve el valor
  return x + y;
}

function resta(x, y) {
  // Resta "x" de "y" y devuelve el valor
  return y - x;
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  return x * y;
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  return x / y;
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  return x === y;
}

// revisar
function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  return str1.length === str2.length;
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  return num < 90;
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  return num > 50;
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  return x % y;
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  return num % 2 === 0;
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  return num % 2 !== 0;
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  return num * num;
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  return num * num * num;
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  return num ** exponent;
}

function redondearNumero(num) {
  // Redondea "num" y devuélvelo
  return Math.round(num);
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba y devuélvelo
  return Math.ceil(num);
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str"
  return str + "!";
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados
  return nombre + " " + apellido;
}

function obtenerSaludo(nombre) {
  // "Martin" -> "Hola Martin!"
  return "Hola " + nombre + "!";
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un cuadrado teniendo su altura y ancho
  return alto * ancho;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
};
