const form = document.querySelector("#todoAddForm");
const formInput = document.querySelector("#todoName");
const cardBodyFirst = document.querySelectorAll(".card-body")[0];
const cardBodySec = document.querySelectorAll(".card-body")[1];
const todoList = document.querySelector(".list-group");
const clearButton = document.querySelector("#clearButton");
const icon = document.querySelector(".fa fa-remove");

runEvents();
let todos = [];

function runEvents() {
    form.addEventListener("submit", addFunc);
    document.addEventListener("DOMContentLoaded", localAdd);
    clearButton.addEventListener("click", clearBut);
    icon.addEventListener("click", removeTodo);

}

function removeTodo(e) {
    const Del = e.target.parentElement.parentElement;
    Del.remove();
}

function localAdd() { //local storagedakileri listeye yazdırır.
    localStControl();
    todos.forEach(function (todo) {
        addTodo(todo);
    });
}

function addFunc(e) {
    const input = formInput.value.trim();
    if (input == "" || input == null) {
        showAlert(warning, "Lütfen boş geçmeyiniz!");
    }
    addTodo(input);     //listeye ekleme
    formInput.value = "";

    addLocalSt(input);  //localstorage'a ekleme
    showAlert(succes, "Tebrikler,ekleme başarıyla gerçekleşti.");

    e.preventDefault(); //sayfa yenilenmelerini engeller
}

function addTodo(input) {

    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.textContent = input;

    const a = document.createElement("a");
    a.className = "delete-item";
    a.href = "#";

    const i = document.createElement("i");
    i.className = "fa fa-remove";

    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);


}

function clearBut() {
    todoList.innerHTML = "";
    localStorage.clear();
}

function addLocalSt(input) {
    localStControl();
    todos.push(input);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function localStControl() {  //amaç kontrol sağlayıp diziye çevirmek
    if (localStorage.getItem("todos") == null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}

function showAlert(type, message) {
    const div = document.createElement("div");
    div.className = "alert alert-" + type;
    div.textContent = message;
    cardBodyFirst.appendChild(div);

    setTimeout(function () {  //belli süreliğine bir şeyin var olması için kullanılır.
        div.remove();
    }, 3000);
}