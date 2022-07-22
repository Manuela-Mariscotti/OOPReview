import { Mobile } from "./mobile";

export class MobileLibrary{
    private name:string;
    private location:string;
    private mobiles:Mobile[];
    private totalPrice:number;

    constructor(name:string,location:string,mobiles:Mobile[]){
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
    }

    public getName():string{
        return this.name;
    }

    public getLocation():string{
        return this.location;
    }

    public getMobiles():Mobile[]{
        return this.mobiles;
    }

    public getTotalPrice():number{
        return this.totalPrice;
    }

    public setName(name:string):void{
        this.name = name;
    }

    public setLocation(location:string):void{
        this.location = location;
    }

    public setMobiles(mobiles:Mobile):void{
        this.mobiles.push(mobiles);
    }
    
    public totalPriceCalculation():number{
        let total=0;
        for (let i =0; i < this.mobiles.length; i++){
            let currentValue=this.mobiles[i].getPrice();
            total +=currentValue;
        }
        return total;
    }
}