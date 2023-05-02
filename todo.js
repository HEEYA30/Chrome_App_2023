const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");


const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    // JSON.stringify() anything => string transition
}


function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id ));
   saveToDos();
}


function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    // li부모 안 span자식
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerHTML = "❌";
    // ✔❌
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}


function toDoBtnSubmit(event) {
    // 순서대로
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
   
    // localStorage.setItem(); 
    // 저장
     // localStorage.getItem();
    //  불러오기
   
}

toDoForm.addEventListener("submit", toDoBtnSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);


if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
// 배열.함수(실행대상)
// forEach는 filter와 유사, paintToDo를 실행 x parsedToDos만큼 item이 object화 -> 각각 추가, 삭제 가능

// const arr = [1,2,3,4]
// function xfilter(item) {
//     return item !== 3
// // item이 3이 아니면 true리턴, 값실행
// } return item <= 1000
// arr.filter(xfilter);
// [1,2,3,4].filter(xfilter)
// filter는 xfilter에 1,2,3,4넣어실행 = xfilter(1), xfilter(2),,,,


// const todos = [{text:"lalala"}, {text:"lololo"}]
// function xfilter(todo) {
//     return todo.text !== "lololo"
// }
// todos.filter(xfilter);