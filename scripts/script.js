
const text = document.querySelector(".text")
        
const animateText = () =>{
    setTimeout(() => {
        text.textContent = "Hi, My name is Justice"
    }, 0);
    setTimeout(() => {
        text.textContent = "Am a webdeveloper"
    }, 10000);
    setTimeout(() => {
        text.textContent = "It's nice meeting you in code!"
    }, 20000);
}

animateText()
setInterval(animateText, 30000);


