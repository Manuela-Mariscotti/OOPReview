import { Punto } from "./punto"; 

export class Triangulo{
    private v1:Punto;
    private v2:Punto;
    private v3:Punto;

    constructor(v1:Punto,v2:Punto,v3:Punto){
        this.v1 = v1;
        this.v2 = v2;
        this.v3 = v3;
    }

    public calcularLongitudLados():number[]{
        let lado1 = this.v1.calcularDistancia(this.v2);
        let lado2 = this.v2.calcularDistancia(this.v3);
        let lado3 = this.v3.calcularDistancia(this.v1);
        let lados = [lado1,lado2,lado3];
        return lados;
    }
}