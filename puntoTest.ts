import { Punto } from "./punto";

let punto1 = new Punto(7,4);
let punto2 = new Punto(1,2);
punto1.toString();

console.log(punto1.distanciaAlOrigen());
console.log(punto1.calcularDistancia(punto2));
console.log(punto1.calcularCuadrante());

let punto3 = new Punto(6,1);
let punto4 = new Punto(3,9);
let puntos = [punto3,punto4];
console.log(punto1.calcularMasCercano(puntos));