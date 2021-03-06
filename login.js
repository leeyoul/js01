const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function login(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    greetingname(username);
    loginCheck(); //로그 아웃버튼 생성 코드는 menu.js에서 확인 가능
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

function greetingname(username) {
    greeting.innerText = `Hello, ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    
}


if(savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", login);
}
else {
    greetingname(savedUserName);
}


