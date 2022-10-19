console.log("Loops başlangıç");


// //dinamik olacak
 let krediler = ["ihtiyaç", "taşıt", "araç"];

// //döngüler
for(let i =0; i < krediler.length; i++ ){
console.log(krediler[i]);
}

console.log("<ul>")
for(let i =0; i<krediler.length; i++){
    console.log("<li>" + krediler[i] + "</li>")
}
console.log("</ul>")

// arrow function
krediler.forEach(kredi => {
    console.log("Foreach:", kredi);

});

let urunler = [
    {fiyat:100, ad: "Ürün 1", discount:true, rate:15},
    {fiyat:150, ad: "Ürün 2", discount:true, rate:0},
    {fiyat:200, ad: "Ürün 3", discount:true, rate:2.5},
]

//tün ürünleri gezip fiyatı %10 indirimli olarak yazdır
//true ise rate kadar indirimli olarak yazdır
// %10 inririmli hali 150'tl üzerinde ise pahalı yazdır

urunler.forEach((urun) => {
   if( urun.fiyat >160 )
   console.log(urun);
}
)