let num1 = null;
let num2 = null;
let operacion = null;
let memoria = null;
let pantalla = "";

const resultado = document.getElementById("resultado");

function mostrar() {
    resultado.innerText = pantalla;
}

function suma(a, b) {
    return a + b;
}
function resta(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    if (b === 0) {
        return "Error";
    }
    return a / b;
}

function ingresar(valor) {
    pantalla += valor;
    mostrar();
}

function operar(op) {
    if (pantalla === "") return;
    num1 = parseFloat(pantalla);
    operacion = op;
    pantalla = "";
    mostrar();
}

function borrarUltimo() {
    pantalla = pantalla.slice(0, -1);
    mostrar();
}

function calcular() {
    if (num1 === null || operacion === null || pantalla === "") return;

    num2 = parseFloat(pantalla);
    let resultadoFinal;

    if (operacion === "+") {
        resultadoFinal = suma(num1, num2);
    } else if (operacion === "-") {
        resultadoFinal = resta(num1, num2);
    } else if (operacion === "*") {
        resultadoFinal = multiplicar(num1, num2);
    } else if (operacion === "/") {
        resultadoFinal = dividir(num1, num2);
    }

    pantalla = resultadoFinal.toString();
    mostrar();

    num1 = null;
    num2 = null;
    operacion = null;
}

function guardarMemoria() {
    memoria = pantalla;
}

function usarMemoria() {
    if (memoria !== null) {
        pantalla += memoria;
        mostrar();
    }
}

function limpiar() {
    num1 = null;
    num2 = null;
    operacion = null;
    pantalla = "";
    mostrar();
}
