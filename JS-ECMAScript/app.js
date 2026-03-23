// arrow function kullanımı
const arrFunc = () => {
    console.log("Arrow func");
    console.log("hoşgeldin");
}
arrFunc();

const func2 = (isim, yas) => {
    console.log(isim, yas);
}
func2("fatma", 22);

const func3 = isim2 => console.log("isminiz:", isim2) //!tek satırda fonksiyon tanımı(tek satır ise parantezler kaldırılabilir.)
func3("fatma");

const diz = [34, 56, 66, 74, 22, 14];
diz.forEach(sayı => console.log(sayı)); //function yerine arrow func. 



//Destructing
let dizi1 = ["hoşgeldin", "ecma", 2026];
let [str1, str2, sayı] = dizi1; //indisleri kullanmadan map'leyerek aktarma
console.log(str1, str2, sayı);

let obj = {       //obje tanımı
    isim: "sema",
    soyisim: "inci",
    yas: 20,
    okul: "üni"
}

let { isim: ad, soyisim: soy, yas: ya } = obj; //destructing ile aktarma
console.log(ad, soy, ya);

//!  Dizilerde dönmek için 3 adet döngü kullanılabilir: forEach() , for in , for of
const array1 = [12, 44, 32, 33, 21, 1, 9, 0, 88];

array1.forEach(function (sayi) {
    console.log(sayi);
})

console.log("index - değer");
for (let sayi in array1) {
    console.log(sayi, array1[sayi]);   //for in indexlerini verir.
}

console.log("değer -- index");
for (let sayi2 of array1) {
    console.log(sayi2, array1.indexOf(sayi2));  //for of değerleri verir.
}


//Spread operatörü( ...diziAd ) --  diziyi indislerine virgüllerle ayırarak verir.
let dizi3 = [4, 8, 23, 65];
function topla(a, b, c, d) {
    console.log(a + b + c + d);
}
topla(...dizi3);

const diz1 = [23, 56, 77];
const diz2 = ["ayşe", "ali", ...diz1];
const diz3 = [...diz2];
console.log(diz2);
console.log(diz3);


//Map yapısı -- dizilere alternatif veri tipleridir.
const map1 = new Map(); //map nesnesi oluşturma
map1.set(1, "ayşe");
map1.set(2, "fatma");
map1.set(5, "zarar");
console.log(map1.get(1));
console.log("map boyutu:", map1.size);
let del = map1.delete(5);
console.log("silindi:", del);
console.log("3 var mı?", map1.has(3));


map1.forEach(sayi => { //sadece value yazar.
    console.log(sayi);
})

//mapte dönme
for (let [key, value] of map1) {  //mapte değerler [key,value] olarak tutulduğundan böyle yazılmalı.
    console.log(key, value);
}

const keys = Array.from(map1.keys()); //döngüde dönebilmek için diziye çevrilir.
console.log(keys);
for (let i of keys) {
    console.log(i, map1.get(i));
}

for (let value of map1.values()) {
    console.log("values:", value);
}

//! foreach ile yazdırmak için dizi olması lazım. for in-for of'da ise şart değildir!

//Set yapısı -- bu da dizi alternatifidir.Ama indis, key-value olayı yok. *aynı değerler sadece 1 kez yazılır.
const set1 = new Set();
set1.add("mehmet");
set1.add(22);
set1.add(18);
set1.has(10);
console.log(set1);
for (let value of set1) {
    console.log(value);
}

let dizi5 = [12, 34, 56, 77, 89, 12, 12]; //diziden set'e çevirme
const set2 = new Set(dizi5);
console.log(set2);
console.log(set2.size);



//literal templates( `` ) ile stringleri yazdırma
function yazdır(isim, soyisim) {
    console.log("isminiz:" + isim + " " + "soyisminiz:" + soyisim);
}
yazdır("zelal", "inci");

function yazdır2(isim, soyisim) {
    console.log(`isminiz: ${isim}  soyisminiz: ${soyisim}`);
}
yazdır2("zelal", "inci");



//OOP - nesneye yönelik pr.
class insan {

    constructor(isim, soyisim, yas, maas) { //değişkenler const. da eklenince tanımlanmış gibi olur.
        this.isim = isim;
        this.soyisim = soyisim;
        this.yas = yas;
        this.maas = maas;
    }

    yazdır() {  //metotlar böyle
        console.log(`isim:${this.isim}  soyad:${this.soyisim} yas:${this.yas} maas:${this.maas}`);
    }

    static yasDegistir(yas2) {
        this.yas = yas2;
        console.log("yeni yasınız:", this.yas);
    }
}

const insan1 = new insan("fatma", "inci", 22, 8000);  //nesne oluşturma
insan1.yazdır();
insan1.maas = 10000;
//insan1.yasDegistir(18);  hata verir.
console.log("yeni maas:", insan1.maas);

insan.yasDegistir(25); //! static'e erişirken nesne oluşturulmaz.class adı üzerinden erişilir.


//inheritance(miras alma)
class ogrenci extends insan {
    isim = "ayse";
    soyisim = "demir";
    yas;
    maas;
    write() {
        console.log("üst sınıftan:");
        yazdır();
    }
}

const ogr = new ogrenci();
ogr.write();


class person {
    constructor(ad, soyad, tc) {
        this.ad = ad;
        this.soyad = soyad;
        this.tc = tc;
    }

    write() {
        console.log("isim:", this.ad, "soyad:", this.soyad, "tc:", this.tc);
    }
}

class kull extends person {
    constructor(ad, soyad, tc) {
        super(ad, soyad, tc); //miras aldığı sınıfın constr.ını çağırır.
    }
    write() {
        super.write();
    }
}

const kull1 = new kull("fatma", "inci", 228864);
kull1.write();


