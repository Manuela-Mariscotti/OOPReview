export class Punto{
    private x:number;
    private y:number;

    constructor(x:number,y:number){
        this.x=x;
        this.y=y;
    }

    public getX():number{
        return this.x;
    }

    public getY():number{
        return this.y;
    }

    public setX(x:number):void{
        this.x=x;
    }

    public setY(y:number):void{
        this.y=y;
    }

    public toString():void{
        console.log(`(${this.x},${this.y})`);
    }

    public distanciaAlOrigen():number{
        return Math.sqrt(this.x**2+this.y**2);
    }

    public calcularDistancia(otroPunto:Punto):number{
        let x1 = this.x;
        let y1 = this.y;
        let x2 = otroPunto.x;
        let y2 = otroPunto.y;

        let result = Math.sqrt(((x2-x1)**2)+((y2-y1)**2));

        return result;
    }

    public calcularCuadrante():number{
        let x = this.x;
        let y = this.y;
        let cuadrante;
        if(x==0 || y==0){
            cuadrante = 0;
        }if(x>0 && y>0){
            cuadrante = 1;
        }if(x<0 && y>0){
            cuadrante = 2;
        }if(x<0 && y<0){
            cuadrante = 3;
        }if(x>0 && y<0){
            cuadrante = 4;
        }
        return cuadrante;
    }

    public calcularMasCercano(puntos:Punto[]):Punto{
        let valor1 = this.calcularDistancia(puntos[0]);
        let valor2 = this.calcularDistancia(puntos[1]);
        let resultado;
        if(valor1 > valor2){
            resultado = puntos[0]
        }else{
            resultado = puntos[1];
        }
        console.log("El punto mas cercano es:");
        return resultado;
    }
}