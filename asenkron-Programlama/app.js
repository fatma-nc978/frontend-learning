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

