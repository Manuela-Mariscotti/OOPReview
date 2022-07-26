import { Mobile } from "./mobile";
import { MobileLibrary } from "./MobileLibrary";

let Nokia3210 = new Mobile("Nokia 3210","3210","Nokia",0,"blue",false,0,110);
let iPhone3G = new Mobile("iPhone 3G","3G","Apple",8,"white",true,1,499);
let SamsugGalaxy10 = new Mobile("Samsug Galaxy 10","Galaxy 10","Samsung",128,"grey",true,3,437);
let HTCDesireC = new Mobile("HTC Desire C","Desire C","HTC",4,"black",false,1,89)

let mobiles_1 = [Nokia3210,iPhone3G,SamsugGalaxy10,HTCDesireC];

let MobileLibrary_1 = new MobileLibrary ("Librería moviles antiguos","Madrid",mobiles_1);

console.log(MobileLibrary_1.getName());
console.log(MobileLibrary_1.getLocation());

MobileLibrary_1.setName("Reliquias del pasado");
MobileLibrary_1.setLocation("Burgos");

console.log(`Nombre nuevo : ${MobileLibrary_1.getName()}`);
console.log(`Locación nueva : ${MobileLibrary_1.getLocation()}`);
console.log(MobileLibrary_1.printLibrary());


let MotoG41 = new Mobile ("Motorola moto G41","moto G41","Motorola",32,"darkgrey",true,3,212);
let HonorMagic4Pro = new Mobile ("HONOR Magic4 Pro","Magic4 Pro","Honor",256,"lightblue",true,4,1099);
let ZebraTC77 = new Mobile ("Zebra TC77","TC77","Zebra",256,"black",true,1,2062);
let OukitelWP5 = new Mobile("OUKITEL WP5","WP5","Oukitel",32,"red",false,3,159);

let mobiles_2 = [MotoG41,HonorMagic4Pro,ZebraTC77,OukitelWP5];

let MobileLibrary_2 = new MobileLibrary("Moviles del trabajo","Zaragoza",mobiles_2);

console.log(MobileLibrary_2.getName());
MobileLibrary_2.setName("Moviles para currar");
console.log(`Nuevo nombre de la librería : ${MobileLibrary_2.getName()}`);

console.log(MobileLibrary_2.getTotalPrice());
MobileLibrary_2.printLibrary();