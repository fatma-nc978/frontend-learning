//javascriptte ileri konular

// //DOM yapısı
// console.log(window);
// console.log(document);
// console.log(document.location.hostname);
// console.log(document.location.pathname);
// console.log(document.characterSet);
// console.log(document.title, document.forms);
// console.log(document.links);
// console.log(document.links.item(0));
// console.log(document.links.item(0).id);
// console.log(document.forms.item(1).children);


//selectors(seçiciler) ile elementleri(objeleri) yakalama :  id, class name, tag name   ile yapılır.
//id ile seçme -> getElementById - tek element   == querySelector(#id)
let button1 = document.getElementById("clearButton");
console.log(button1);
console.log(button1.getAttributeNames());
console.log(button1.className);
console.log(button1.classList);
console.log(button1.classList[0]);

console.log(button1.textContent); //ikiside içerik gösterir ama textcontent tagı uygulamaz!
console.log(button1.innerHTML);
button1.textContent = "<b>Tüm Todoları Temizle</b>";
console.log(button1.textContent);
button1.innerHTML = "<b>Tüm Todoları Temizle</b>";
console.log(button1.innerHTML);

//class name ile seçme -> getElementsByClassName  - çok element == querySelectorAll(.classname)
const buttonList = document.getElementsByClassName("btn");
console.log(buttonList);
console.log(buttonList.item(0).getAttributeNames());
console.log(buttonList.item(0).getAttribute("type"));
console.log(buttonList.item(0).textContent);


//tag name ile seçme -> getElementsByTagNames - çok element   == querySelectorAll(tagname)
const forms = Array.from(document.getElementsByTagName("form"));  //array.from ile döngüde kullanılabildi!!
console.log(forms);
forms.forEach(function (form) {  //tek tek yazdırmak için döngü kullanılır.
    console.log(form);
})
console.log(forms[0].getAttributeNames());
console.log(forms[1].getAttributeNames());
console.log(forms[0].id);

const links = document.getElementsByTagName("a");
console.log(links);
console.log(links[0].getAttributeNames());
console.log(links[0].href);

//querySelector / querySelectorAll ile element seçme
const formlar1 = document.querySelectorAll("form");
console.log(formlar1);
const formlar2 = document.querySelectorAll("form:first-child");
console.log(formlar2);

const buttons = Array.from(document.querySelectorAll(".btn"));
console.log(buttons);
buttons.forEach(function (but) {
    but.style.backgroundColor = "grey";
})

const linkler = document.querySelectorAll("#clearButton");
console.log(linkler);


// //style kullanımı
// const buttons = document.querySelectorAll(".btn");
// const button1 = document.querySelectorAll(".btn")[0];
// const button2 = document.querySelector("#clearButton");
// const forms = document.querySelectorAll("form")[0];



// console.log(button1);
// button1.style.backgroundColor = "black";
// button1.style.padding = "10px";
// button1.style.fontWeight = "700";
// button1.style.marginTop = "15px";

// console.log(buttons);
// console.log(button2);
// button2.style.backgroundColor = "red";
// button2.style.padding = "10px";
// button2.style.fontWeight = "700";


// //parent-child ilişkisi
// const ebv = document.querySelector(".card");
// const çck = document.querySelectorAll("form");
// const çck2 = document.querySelectorAll("input")[0];
// const çck3 = document.querySelector(".btn");

// console.log(ebv);
// console.log(çck);
// console.log(çck2);
// console.log(çck3);

// console.log(ebv.children);  //anneden çocuklara erişmek(children)
// ebv.children[0].textContent = "TODO LİST SAYFASI";
// ebv.children[0].style.fontWeight = "700";

// const dizi = Array.from(ebv.children);
// dizi.forEach(function (i) {
//     console.log(i);
//     //console.log(i.textContent);
// })

// //anneye erişmek(parentElement)
// const bul1 = çck2.parentElement;
// const bul2 = çck3.parentElement;
// const bul3 = çck3.parentElement.parentElement;
// console.log(çck2);
// console.log(bul1);
// console.log(bul2);
// console.log(bul3);

// const krd = çck2.nextElementSibling;//sonraki kardeşine erişmek
// console.log(çck2);
// console.log(krd);

// const ull = document.querySelector(".card").children[3].children[2];
// console.log(ull);
// const ullk = ull.nextElementSibling;
// console.log(ullk);
// const ullkk = ullk.nextElementSibling; //sonrasında kardeş yok
// console.log(ullkk);


// //element oluşturma ve ekleme
// const links = document.querySelectorAll(".list-group")[0];
// console.log(links);

// const link = document.createElement("li");
// const al = document.createElement("a");
// const il = document.createElement("i");
// links.appendChild(link);

// link.className = "list-group-item d-flex justify-content-between";
// link.innerHTML = "Todo 2";
// al.href = "#";
// al.className = "delete-item";
// il.className = "fa fa-remove";
// al.appendChild(il);
// link.appendChild(al);
// console.log(link);
// console.log(al);

// //buton ekleme
// const cardbody = document.querySelectorAll(".card-body")[0];//eklenicek yeri ayarlama
// const form = cardbody.children[0];
// console.log(form);

// const button2 = document.createElement("button"); //element oluşturma
// button2.id = "todoAddButton";
// button2.type = "submit";
// button2.className = "btn btn-primary mt-4 btn-sm";
// button2.innerHTML = "Ekle";

// form.appendChild(button2); //ekleme


// //remove() ile element silme
// const todo1 = document.querySelectorAll(".list-group-item")[0];
// console.log(todo1);
// todo1.remove();

// //replaceChild() ile yer değiştirme
// const cardbodyy = document.querySelectorAll(".card-body")[1];

// const h4 = document.createElement("h4");
// h4.className = "card-title";
// h4.innerHTML = "TODO LİSTESİ";
// h4.style.color = "red";

// cardbodyy.replaceChild(h4, cardbodyy.childNodes[1]);



// //EVENTS
// //html taglarının içinde direkt yazılabilir veya orada metot olarak yazılabilir.
// function changeTitle() {
//     document.querySelector("#clearButton").textContent = "Değişti..";
// }

// //!en çok kullanılan olan : addEventListener() ile yakaladığına birden fazla eventler atanabilir.
// const buton1 = document.querySelector("#todoAddButton"); //element seçme
// console.log(buton1);

// buton1.addEventListener("click", butonDegis); //ilk eventi ekleme (on'suz event,ne çağrılıcağı)
// function butonDegis(e) {
//     buton1.textContent = "Todo eklendi!";
//     console.log(e.type); //her event'te bir obje döner.ve o objeye parametre ile erişebiliriz.
//     console.log(e.target);
//     console.log(e.target.className);
// }

// buton1.addEventListener("mouseover", renkDegis); //2.eventi ekleme
// function renkDegis() {
//     buton1.style.backgroundColor = "black";
// }

// //  sayfa eventları
// window.addEventListener("load", run);
// function run() {
//     console.log("window(sayfa) yüklendi");
// }
// document.addEventListener("DOMContentLoaded", load);
// function load() {
//     console.log("Document(sayfa içeriği) yüklendi!");
// }

// //  Mouse eventları
// //click , dblclick eventi
// const pTitle = document.querySelectorAll(".card-title")[1];
// pTitle.addEventListener("dblclick", ciftTık);
// function ciftTık(e) {
//     pTitle.style.color = "red";
//     console.log(e.type);
// }

// //mouseenter , mouseleave --  mouse ile üzerine geldiğinde ve çıktığında
// const formBg = document.querySelectorAll(".card-body")[1];
// console.log(formBg);

// formBg.addEventListener("mouseenter", formBgEkle);
// formBg.addEventListener("mouseleave", formBgKaldır);

// function formBgEkle(e) {
//     formBg.style.backgroundColor = "gray";
//     console.log(e.type);
// }

// function formBgKaldır(e) {
//     formBg.style.backgroundColor = "#fff";
//     console.log(e.type);
// }


// //klavye eventları -- keydown , keyup
// const inp = document.querySelector("#todoName");
// console.log(inp);

// inp.addEventListener("keyup", klavyeBas);

// function klavyeBas(e) {
//     let input = e.target.value;
//     console.log(input);
//     if (input[0] != "" && !isNaN(input[0])) {  // isNaN() = sayı değilse
//         alert("Sayı ile başlayamazsınız!");
//     }
// }

// //input eventları  -- focus , blur , copy , paste , cut , select gibi input içi kayıtlar tutulur.
// inp.addEventListener("paste", inpPaste);

// function inpPaste(e) {
//     e.preventDefault(); //!yapılan davranışı iptal eder.burda ise yapıştırılan input silinir , gözükmez.
//     console.log(e.type);
//     alert("kopyala-yapıştır yapmayınız , elle giriniz!");
// }