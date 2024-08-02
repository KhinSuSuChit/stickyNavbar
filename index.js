const navbarEl = document.querySelector(".navbar");

const bottomContainerE1 = document.querySelector(".bottom-container");


window.addEventListener("scroll", ()=>{
    console.log("scrollY");
    console.log(window.scrollY);
    console.log("offsetTop");
    console.log(bottomContainerE1.offsetTop);
    console.log("navbarEl");
    console.log(navbarEl.offsetHeight);
    if(window.scrollY > bottomContainerE1.offsetTop - navbarEl.offsetHeight - 50){
        navbarEl.classList.add("active");
    }
    else{
        navbarEl.classList.remove("active");
    }
});