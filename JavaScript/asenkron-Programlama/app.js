console.log("fatma");  //senkron yapı

setTimeout(() => {      //belirtilen süre geçince içindekini çalıştırır.
    console.log("1 sn geçti.");

}, 1000);

setTimeout(() => {
    console.log("2 sn geçti");
}, 1200);

console.log("hoşgeldin");


//asenkron problem örneği--çözmek için: callback , promise , async await yapılarını kullanarak senkron yapıya çeviririz.
const dizi = [  //normalde rest APIdan çekilicek veri
    {
        id: 5,
        name: "fatma"
    },
    {
        id: 3,
        name: "ayşe"
    },
    {
        id: 7,
        name: "ömer"
    }
]

function getUserId() {
    setTimeout(() => {
        //normalde rest APIdan veri çeker
        return 7;
    }, 1000);
}

function getUserNameById(id2) {
    console.log(id2);
    setTimeout(() => {
        dizi.forEach((i) => {
            if (i.id == id2) {
                console.log(i.name);
            }
        })
    }, 500);
}

let idd = getUserId();
getUserNameById(idd); //ikisi de asenkron'dur.Aynı anda çalışırlar ve daha id çekilmeden id'den name'e erişmeye çalışır.Çalışmaz!

getUserId(getUserNameById)



//!callback ile asenkron -> senkron çevrimi
function writeName(callback) {  //önce gelmesini istediğin fonksiyona 2.fonksiyonu parametre olarak gönderirsin.
    setTimeout(() => {
        let name = "fatma";
        callback(name);
    }, 1000);
}

function writeFullName(name2) {
    setTimeout(() => {
        let surn = "inci";
        console.log(name2, surn);
    }, 500);
}

writeName(writeFullName);


//callback hell örneği
function getName(callback) {
    setTimeout(() => {
        let name3 = "ayşe";
        callback(name3);
    }, 500);
}

function getSurname(name3, callback) {
    setTimeout(() => {
        let surname = "demir";
        callback(surname);
    }, 400);
}

function getAge(name3, surname, callback) {
    setTimeout(() => {
        let age = 24;
        callback(age);
    }, 300);
}

getName((name3) => {   //fonksiyona ad verilmeden direkt tanımlanır.
    getSurname(name3, (surname) => {
        getAge(name3, surname, (age) => {
            console.log(name3, surname, age);
        })
    })
})



//AJAX ile server'dan veri çekme(tarayıcı-server iletişimi) : https://www.w3schools.com/js/js_ajax_intro.asp
function getPosts(url, id) {
    let newUrl = setUrl(url, id);
    const xhr = new XMLHttpRequest();  //XMLHttpRequest classından nesne oluşturma
    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState == 4 && xhr.status == 200) { //eğer istek gitmiş ve cevap hazırlanmışssa
            console.log(JSON.parse(xhr.responseText));  //string'den json formatına dönüştürür.
        }
    })

    xhr.open("GET", newUrl);   //isteği tetiklemek için kullanılır.
    xhr.send();
}

function setUrl(url, id) {   //url'yi idye göre kurma
    if (id == null) {
        return url;
    }
    else {
        return url + "?postId=" + id;
    }
}

getPosts("https://jsonplaceholder.typicode.com/posts", null); // https://jsonplaceholder.typicode.com/ ile cold veriler

console.log("-----------------------------\n");


//2.örnek
function getPhotos(url, id) {
    let url2 = setUrl2(url, id);
    const xhr2 = new XMLHttpRequest();
    xhr2.addEventListener("readystatechange", () => {
        if (xhr2.status == 200 && xhr2.readyState == 4) {
            console.log(xhr2.responseText);
        }
    })
    xhr2.open("GET", url2);
    xhr2.send();
}

function setUrl2(url, id) {
    if (id == null) {
        return url;
    }
    else {
        return url + "?albumId=" + id;
    }
}

getPhotos("https://jsonplaceholder.typicode.com/photos", 1);



//Promise ile asenkron -> senkron dönüşümü (callback alternatifi)
let value = true;
function createPromise() {
    return new Promise((resolve, reject) => {  //promise oluşturma ve fonksiyonda geri döndürme
        if (value) {
            resolve("promise doğru çalıştı");
        }
        else {
            reject("sıkıntı var");
        }
    })
}

createPromise()  //fonksiyonu çağırma
    .then((result) => {  //resolve ile verilen doğru değeri yakalama
        console.log(result);
    })
    .catch((err) => {    //reject ile verilen yanlış değeri yakalama
        console.log(err);
    })
    .finally(() => {
        console.log("her zaman çalışır.");
    });



//promise örnek1 ( AJAX(veri çekme) + promise(asenk->senk) )
function getStudents(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        try {   //herşey okey çalışırsa
            xhr.addEventListener("readystatechange", () => {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
            })
        } catch (error) {  //hatalı çalışırsa
            reject(error);
        }

        xhr.open("GET", url);
        xhr.send();

    })
}

getStudents("Students.json")
    .then((response) => {  //resolve ile gelen veriyi alır
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })


//promise.all() fonksiyonu: birden fazla promisi dizi olarak alır.
const p1 = Promise.resolve("1.promise başarılı."); //direkt olarak resolve yada reject promisler oluşturulabilir.
const p2 = Promise.resolve("2.promise de başarılı");
const p3 = new Promise((resolve, reject) => {
    resolve("3.promise de başarılı");
})
p4 = Promise.reject("4.promise hatalı!");

Promise.all([p1, p2, p3, p4])  //! birden fazla promise'e dizi gibi ulaşır.Hepsi rsolve ise then ile , bir tanesi bile reject ise catch ile yakalar.
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })


//Fetch API : AJAX-XMLHTTPRequest alternatifi olarak kullanılır.çok daha kolay!
function getStudents2(url) {
    fetch(url) //adrese istek atar , response türünde bir promise döner.
        .then((response) => response.json())  //döndüğü promisi tutar, json'ında bulunan veriye gider.
        .then((data) => console.log(data))    //.json ile dönen veriyi tutar.
        .catch((error) => console.log(error));
}

getStudents2("Students.json");




// async await yapısı : fetch API ile beraber ; asenkron yapıyı korumak,sıranın karışmasını engellemek için kullanılır.
document.querySelector("#button").addEventListener("click", async () => {
    const post = await (await fetch("https://jsonplaceholder.typicode.com/posts/5")).json(); //kısaltılmış
    const comments = await (await fetch("https://jsonplaceholder.typicode.com/comments?postId=" + post.id)).json();
    console.log(post, comments);
})



