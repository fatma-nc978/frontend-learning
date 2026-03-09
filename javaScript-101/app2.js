//Switch-case örnek

// alert("ATM'ye hoşgeldiniz!");
// let metin = "1-Bakiye görüntüleme\n" + "2-Para çekme\n" + "3-Para yatırma\n" + "4-Çıkış\n" + "Lütfen bir işlem seçiniz...";
// alert(metin);
// let seçim = Number(prompt());
// console.log("Yapmak istediğiniz işlem:" + seçim);
// let Bakiye = 1000;
// let çekilecek;
// let yatılıcak;
// switch (seçim) {
//     case 1:
//         alert("Bakiyeniz : " + Bakiye);
//         console.log("Bakiyeniz : " + Bakiye);
//         break;
//     case 2:
//         çekilecek = Number(prompt("Çekmek istediğiniz tutarı giriniz:"));
//         if (çekilecek > Bakiye) {
//             alert("Bakiye yeterli değil!");
//             console.log("Bakiyenizi aşan bir tutar çekmek istediniz!");
//         }
//         else {
//             alert("Tutar çekiliyor...");
//             Bakiye = Bakiye - çekilecek;
//             alert("Yeni bakiyeniz:" + Bakiye);
//             console.log("Bakiyenizden " + çekilecek + " TL kadar tutar çekildi!");
//         }
//         break;

//     case 3:
//         yatılıcak = Number(prompt("Yatırmak istediğiniz tutarı giriniz:"));
//         Bakiye += yatılıcak;
//         alert("Yeni bakiyeniz:" + Bakiye);
//         console.log("Bakiyenize " + yatılıcak + " TL kadar tutar eklendi!");
//         break;

//     case 4:
//         alert("Çıkış yapılıyor..!");
//         console.log("Çıkış yapıldı!");

//     default:
//         alert("Hatalı tuşlama yaptınız!");
//         break;
// }

// debugger; //hata bulur ve kodu okutur.
// let a = 5;
// let b = 10;
// let metin = String(a);
// //let b = 30;

// //for döngüsü
// let toplam = 0;
// for (let i = 50; i >= 0; i--) {
//     console.log(i);
//     toplam += i;

// }
// console.log("sayılar toplamı:", toplam);

// //while döngüsü
// j = 1;
// while (j <= 10) {
//     console.log("*-*");
//     j++;
// }

// //çarpım tablosu
// for (let i = 1; i <= 10; i++) {
//     console.log(i, "'ler tablosu:");
//     for (let j = 1; j <= 10; j++) {
//         console.log(i, "x", j, "=", (i * j));
//     }
//     console.log("\n");
// }

// //asal sayı bulma
// let sonuc = true;
// let sayi = Number(prompt("lütfen bir sayi giriniz:"));
// for (let i = 2; i <= sayi / 2; i++) {
//     if (sayi % i == 0) {
//         sonuc = false;
//         break;
//     }
// }
// if (sonuc == true) {
//     alert("Girdiğiniz sayi asaldır!");
// }
// else {
//     alert("Girdiğiniz sayi asal değildır!");
// }


// //faktoriyel hesaplama
// let sayi2 = Number(prompt("Bir sayi giriniz:"));
// let fkt = 1;
// for (let j = 1; j <= sayi; j++) {
//     fkt *= j;
// }
// alert("Sayının faktoriyeli:" + fkt);


// //fonksiyonlar-- metindeki harf adetini bulma
// let metin = String(prompt("Bir metin giriniz:"));
// let harf = String(prompt("Bir harf giriniz:"));
// let toplam = 0;
// function harfBul(metin, harf) {
//     for (let i = 0; i < metin.length; i++) {
//         if (metin.charAt(i).toLowerCase() == harf.toLowerCase()) {
//             toplam++;
//         }
//     }
//     return toplam;
// }
// harfBul(metin, harf);
// console.log("Metindeki ", harf, "harfi sayısı:", toplam);


// //mükemmel sayı bulma
// let sayi = Number(prompt("lütfen bir sayı girin:"));
// let toplam = 0;
// let durum = mükBulma(sayi, toplam);

// function mükBulma(sayi, toplam) {
//     for (let i = 1; i <= sayi; i++) {
//         if (sayi % i == 0) {
//             toplam += i;

//         }
//     }
//     if (toplam % sayi == 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// if (durum) {
//     console.log("Sayı bir mükemmel sayıdır!");
// }
// else {
//     console.log("Sayı bir mükemmel sayı değildır!");
// }


// //decimalden binarye çevirme
// let sayi = Number(prompt("bir sayı giriniz:"));

// function decToBin(sayi) {
//     let binary = "";
//     while (true) {
//         binary += sayi % 2;
//         sayi = sayi / 2;
//         if (sayi == 1) {
//             binary += 1;
//             break;
//         }
//     }
//     binary = reverse(binary);
//     return binary;

// }

// function reverse(binary) {
//     let kelime = "";
//     for (let i = (binary.length - 1); i >= 0; i--) {
//         kelime += binary.charAt(i);
//     }
//     return kelime;

// }

// let bin = decToBin(sayi);
// console.log("sayının binary hali:", bin);



//binaryden decimale
let sayi = String(prompt("bir sayı giriniz:"));
sayi = reverse(sayi);
let sonuc = binToDec(sayi);
console.log("sayının decimal hali:", sonuc);

function reverse(sayi) {
    let kelime = "";
    for (let i = (sayi.length - 1); i >= 0; i--) {
        kelime += sayi.charAt(i);
    }
    return kelime;
}

function binToDec(sayi) {
    let dec = 0;
    for (let j = 0; j < sayi.length; j++) {
        dec += (2 ** j) * Number(sayi.charAt(j));
    }
    return dec;

}