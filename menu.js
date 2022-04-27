const NAV = document.querySelector("#nav");
const menuBTN = document.querySelector("#menubtn");
const Logoutbtn = document.querySelector("#logoutbtn");

function NavOn() {
    NAV.classList.toggle("openNav");
    if(NAV.classList.contains('openNav')){
        menuBTN.innerHTML ="X";
    }else { 
        menuBTN.innerHTML ="메뉴열기";
    }

};



//로그아웃  이벤트
function logOut() {
    let logOutResult = confirm("작성된 TODO리스트가 모두 사라집니다. 정말 로그아웃 하시겠습니까?");
    if(logOutResult){
        localStorage.clear();
        window.location.reload();
    };
}

// 로그인상태 체크하고 왼쪽 세로 메뉴 로그인 상태시에 로그아웃 버튼 나타내기
function loginCheck(){    
    if(USERNAME_KEY === null) {
       console.log("로그인상태가 아닙니다");
   }else{
       Logoutbtn.classList.remove(HIDDEN_CLASSNAME);
   }
}

loginCheck();
menuBTN.addEventListener("click", NavOn);
Logoutbtn.addEventListener("click", logOut)

