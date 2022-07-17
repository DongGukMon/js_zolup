const divClock = document.querySelector(".clock");
const divTodos = document.querySelector(".todos");
const divWeather = document.querySelector(".weather");

const login_form = document.querySelector("#login_form");
const login_input = document.getElementById("greeting_input");
const greeting_user = document.getElementById("greeting_user");
const testButton = document.getElementById("test");


let userName = localStorage.getItem("userName")

const tagSwitch = ()=>{
    login_form.classList.toggle("hidden");
    greeting_user.classList.toggle("hidden");
    divClock.classList.toggle("hidden");
    divWeather.classList.toggle("hidden");
    divTodos.classList.toggle("hidden");

}

if(userName){
    greeting_user.innerText=`반가워요 ${userName}님`;
    tagSwitch();
}


const onSubmitHandler = (event) =>{
    event.preventDefault();
    userName = login_input.value;
    localStorage.setItem("userName",userName);
    greeting_user.innerText=`반가워요 ${userName}님`;
    tagSwitch();

}

login_form.addEventListener("submit",onSubmitHandler);
