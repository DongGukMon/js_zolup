const body = document.querySelector("body");

const selectImage = () =>{
    const randomNumber = Math.floor(Math.random()*3)
    return `src/images/${randomNumber}.jpg`
}

const imageName = selectImage();


body.style.backgroundImage = `url(${imageName})`;

