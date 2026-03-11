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

