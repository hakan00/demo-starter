console.log("Statements Start");


console.log(1==1);
console.log(1 !=1);
console.log(1>=1);

// == sadece değer kontrolu yap
// === tip ve değer kontrolu yap
console.log(1 === "1");
console.log(1 !== "1");

//condition true ise bloğunu çalıştırır değilse çalıştırmaz
if (1!=1)
{
console.log("IF bloğu çalıştı..")
}
else if (2==2)
{
    console.log("ELSE IF bloğu çalıştı..")

}
else
{
    console.log("ELSE bloğu çalıştı..")

}

let dolarKurDun =  18.74;
let dolarKurBugun = 18.8;

// dolarKurBugün daha fazlaysa console'a fazla
//daha az ise az yazdır.

if (dolarKurBugun > dolarKurDun)
{
console.log("Dolar kuru bu gün daha fazla ")
}
else if (dolarKurBugun==dolarKurDun)
{
    console.log("Dolar kuru eşit")

}
else
{
    console.log("Dolar kuru dünden daha az")

}

// ternacy operator
// tek satırlık if -ne line statement
dolarKurBugun >= dolarKurDun  ? console.log("Dolar kuru yükselişte") : console.log("Dolar kuru düşüşte");

//switch-case
let toplamBakiye = 100;
let secilenKur = "USD";

switch (secilenKur) {

    case "USD":
        toplamBakiye *=17;
        break;

    case "EUR":
            toplamBakiye *=20;
        break;   
    
    default:
        console.warn("Bilinmeyen kur türü");
        break;

}

console.log("Toplam bakiye:", toplamBakiye);

//seçilen kredi taşıt ise 2 ile ihtiyaç ise 1.5 ile konut ise 2.5 ile
//hiç biri değil ise hata yazdır
//en som krediTutarını yazdır

let secilenKredi = "tasit";
let krediTutari = 150000;

switch (secilenKredi) {
    case "htiyac":
        console.log("Taşıt kredisi seçtiniz .. Faiz uygulanıyor x2");
        krediTutari  = krediTutari*1.5 ;

     break;

   case "tasit":
         console.log("Taşıt kredisi seçtiniz .. Faiz uygulanıyor x2");
        krediTutari  = krediTutari*2 ;
        
     break;

    case "konut":
        console.log("Taşıt kredisi seçtiniz .. Faiz uygulanıyor x2");
        krediTutari = krediTutari*2.5 ;
        
     break;

    default:
        console.error("Bilinmedik kredi türü..");
        break;
}
console.log("Kredi tutarınız",krediTutari);


// girilien sayi çift ise "çift" tek ise "tek" yazalım.
//% => MOD operatör 

let girilenSayi = 10;

if(girilenSayi % 2 ==0 ){
console.log("Girilen sayı çifttir")
}
else {
    console.log("Girilen sayı tektir")
}
