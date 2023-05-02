const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
// const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function loginBtnSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
    // if (username === "") {
    //    alert("Please write your name");
    // }
    // else if (username.length > 15) {
    //     alert("Your name is too long");
    // }
}

// function linkClick(event){
//     event.preventDefault();
//     console.log(event);
//     alert("clicked!");
// }

// link.addEventListener("click", linkClick);
function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);


}
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginBtnSubmit);
}
else {
    paintGreetings(savedUsername);
    
}

// document.querySelector('.hello').innerHTML = "바보";
// $('.hello').css('color','red');
// // 그외 .addClass .removeClass .toggleClass
// $('.hello').html('바보');

// document.querySelector('#test').addEventListener('click',function(){

// });
// $('#test').on('click', function(){
//     $('.hello').hide()

// });
// // .style.display = 'none'; 대신 .hide .fadeout .slideup 등
// document.querySelector('#login').addEventListener('click', funtion(){
//     display = 'block';
// });
// $('#login').show('click');

// document.querySelector('.navbar-toggler').addEventListener('click', function(){
//    document.querySelector('.list-group').classList.toggle('show');
// })

// document.getElementsByClassName('navbar-toggler')[0].addEventListener('click', function(){
//     document.getElementsByClassName('list-group')[0].classList.toggle('show');
//   });