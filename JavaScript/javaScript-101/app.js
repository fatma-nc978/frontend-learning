// *js'e hoşgeldin
// !Her gün çalışıp kodlamayı unutma
// TODO: Bugün başlayalım ve ilerleyelim.

// ekrana çıktı verme yolları
document.writeln("Fatma inci <br>"); //ana sayfaya yazar
document.writeln("20+3");

console.log("fatma inci consolu"); //console yazma
//console.log(window); window objesi js'in en büyük(en dış) objesidir.ve birçok obje,method içerir.
//console.clear(); console temizleme

//alert("Bu bir bilgilendirme mesajıdır!"); alert pop-up  = window.alert() - window objesi fonksiyonudur.

// değişken tanımlama
// function tanım() {
//     let yas = 5;
//     let isim = "fatma";
//     const meslek = "mühendis";
//     let hayat = false;
//     let bilgiler = {
//         isim2: "sema",
//         soyisim: "inci",
//         yas: 20
//     }
//     let dizi1 = [1, 2, 4, 6];
//     let meslek2 = "tasarımcı";

// }
// let yas1 = 5;
// let isim = "fatma";
// const meslek = "mühendis";
// let hayat = false;
// let bilgiler = {
//     isim2: "sema",
//     soyisim: "inci",
//     yas2: 20
// }
// let dizi1 = [1, 2, 4, 6];
// let meslek2 = "tasarımcı";
// console.log(tanım);
// console.log(meslek2);
// console.log(typeof yas); //değişken türleri
// console.log(typeof isim);
// console.log(typeof bilgiler);
// console.log(typeof dizi1);
// console.log(typeof tanım);

// console.log(yas1 ** yas1);
console.clear();

//dialog kutuları -- alert -prompt -confirm
// alert("sitemize hoşgeldiniz..!");

// let name = prompt("isminiz : ");
// let surname = prompt("soyisminiz : ");

// alert("isminiz: " + name + "    soyisminiz:" + surname + " olarak alındı.");

// let sonuc = confirm("işlemi onaylıyor musunuz?");
// console.log("isminiz : ", name);
// console.log("soyadınız : ", surname);
// if (sonuc == true) {
//     console.log("işlem onaylandı!");
// }
// else {
//     console.log("işlem reddedildi!");
// }

// //tür dönüşümleri
// let age = Number(name);
// console.log(typeof age);



//benzin istasyonu uygulaması 
let dizel = 24;
let benzin = 22;
let lpg = 20;

alert("İstasyon bilgilendirmesine hoşgeldiniz!\n ");
let no = Number(prompt("1-Dizel-24TL\n 2-Benzin-22TL\n 3-LPG-20TL\n Lütfen almak istediğiniz türün numarasını giriniz : "));
let litre = Number(prompt("Lütfen kaç litre almak istediğinizi giriniz : "));
let ücret;
let onay;
let toplam;

if (no == 1) {
    ücret = hesapla(dizel, litre);
    onay = confirm("bakiyeniz " + ücret + " TL kadar var mı?");
    if (onay) {
        alert("Olumlu! alabilirisiniz...");
        console.log("Olumlu! yakıtı alabilirisiniz...");
    }
    else {
        alert("Olumsuz! bakiyeniz yetersiz...");
        console.log("Olumsuz! yakıtı alamazsiniz...");
    }
}
else if (no == 2) {
    ücret = hesapla(benzin, litre);
    onay = confirm("bakiyeniz " + ücret + " miktarı kadar var mı?");
    if (onay) {
        alert("Olumlu! alabilirisiniz...");
        console.log("Olumlu! yakıtı alabilirisiniz...");
    }
    else {
        alert("Olumsuz! bakiyeniz yetersiz...");
        console.log("Olumsuz! yakıtı alamazsiniz...");
    }
}
else if (no == 3) {
    ücret = hesapla(lpg, litre);
    onay = confirm("bakiyeniz " + ücret + " miktarı kadar var mı?");
    if (onay) {
        alert("Olumlu! alabilirisiniz...");
        console.log("Olumlu! yakıtı alabilirisiniz...");
    }
    else {
        alert("Olumsuz! bakiyeniz yetersiz...");
        console.log("Olumsuz! yakıtı alamazsiniz...");
    }
}
else {
    alert("Hatalı bir sayı girdiniz!");
    console.log("Hatalı bir sayı!!...");
}

function hesapla(türFiyat, lt) {
    toplam = türFiyat * lt;
    return toplam;
}