import { Mobile } from "./mobile";

let Nokia3210 = new Mobile("Nokia3210","3210","Nokia",0,"azul",false,0,110);
let iPhone3G = new Mobile("iPhone3G","3G","Apple",8,"blanco",true,1,499);
let SamsugGalaxy10 = new Mobile("Samsug Galaxy 10","Galaxy 10","Samsung",128,"gris",true,3,437);

Nokia3210.setIs5G(true);
Nokia3210.setCameraNumber(4);

console.log(Nokia3210.getIs5G());
console.log(Nokia3210.getCameraNumber());

Nokia3210.toString();
iPhone3G.toString();
SamsugGalaxy10.toString();

let mobiles:Mobile[];
mobiles = [Nokia3210,iPhone3G,SamsugGalaxy10];
mobiles[0].toString();
mobiles[1].toString();
mobiles[2].toString();

