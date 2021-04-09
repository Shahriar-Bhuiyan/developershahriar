function navOpen() {
    const button = document.querySelector(".menu");
    const navOpen = document.querySelector(".nav-open");
    const contact = document.querySelector(".contact");
    const social = document.querySelector(".social");
    const logo = document.querySelector(".logo");
  
 button.addEventListener("click",function(e){ 
     navOpen.classList.toggle("nav-close"); 
     logo.classList.toggle("logo-black");
 })
  }
  
  navOpen();
  