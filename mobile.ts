export class Mobile{
    public mobile:string;
    public model:string;
    public trademark:string;
    public sdSize:number;
    public color:string;
    public is5G:boolean;
    public cameraNumber:number;
    public price:number;

    constructor(mobile:string,model:string,trademark:string,sdSize:number,color:string,is5G:boolean,cameraNumber:number,price:number){
        this.mobile = mobile;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
}