console.log("Merhaba Kodlamaio");



//değişkenler ve türleri
// JavaScript Tip güvenli değildir
// variable= var
// TypeScript tip güvenli

//number
let dolarKur = 10;
// dolarKur = 20; //Set etmek 
console.log(dolarKur);

//string=metinsel ifade
let euroKur ="15";
console.log(euroKur);

//matematiksel operatör
console.log(dolarKur+5);
console.log(euroKur+10);

//var keywordu unut let kullan

//boolean = true ya da false
let euroYukselis = true;
console.log(euroYukselis);

//number ondalıklı sayı olabilir => decimal, float, double
dolarKur = 12.52;
console.log(dolarKur);

//koleksiyonlar
// array= dizi
let krediler = ["ihtihaç", "Taşıt", "Konut"];
console.log(krediler);

//object
//JSON => Javascript Object Notation
// KEY - VALUE
//Namin Convention
//camelCase
let odemeBilgileri = {
    aylikOdeme: 415.53,
    faizOrani: 1.89,
    toplamGeriOdeme: 14950.42,
    krediTipi: "İhtiyaç Kredisi",


}
console.log(odemeBilgileri);
