import { Mobile } from "./mobile";

let Nokia3210 = new Mobile("Nokia3210","3210","Nokia",0,"azul",false,0,110);
let iPhone3G = new Mobile("iPhone3G","3G","Apple",8,"blanco",true,1,499);
let SamsugGalaxy10 = new Mobile("Samsug Galaxy 10","Galaxy 10","Samsung",128,"gris",true,3,437);

console.log(Nokia3210);
console.log(iPhone3G);
console.log(SamsugGalaxy10);

Nokia3210.is5G=true;
Nokia3210.cameraNumber=4;

console.log(Nokia3210);

