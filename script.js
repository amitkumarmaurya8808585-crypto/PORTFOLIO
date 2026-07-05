const menuToggle = 
document.querySelector(".menu-toggle");
const navMenu =
document.querySelector("nav ul");

menuToggle.addEventListener("click",function(){
    navMenu.classList.toggle("active");
}); 

const themeToggle = 
document.getElementById("theme-toggle");
themeToggle.addEventListener("click",function(){
    document.body.classList.toggle("dark-mode");
    if
    (document.body.classList.contains("dark-mode")){
        themeToggle.innerHTML ="☀️";
    }else{
        themeToggle.innerHTML ="🌙";
    }
});

const navLinks = 
document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    link.addEventListener("click",() => {
        navMenu.classList.remove("active");
    });
});

const themeBtn =
document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.innerHTML = "☀️";
    }else{
        themeBtn.innerHTML = "🌙";
    }
});