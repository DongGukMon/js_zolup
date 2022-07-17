const clock=document.querySelector("#now_time");

const tictoc = () =>{
    const currentTime = new Date();
    const hours = String(currentTime.getHours()).padStart(2,"0");
    const minutes = String(currentTime.getMinutes()).padStart(2,"0");
    const seconds = String(currentTime.getSeconds()).padStart(2,"0");
    clock.innerText= `${hours}:${minutes}:${seconds}`
}

tictoc()

setInterval(tictoc,1000)