const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');


const  animateLinks = function (link, index){
    if (link.style.animation) {
        link.style.animation = '';
    } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .618}s`;
    }
}

const  burgerClickHandler = function (){
    // toggle nav
    nav.classList.toggle('nav-active');
    // animate links
    navLinks.forEach(animateLinks);
    // Burger animation
    burger.classList.toggle('toggle');
}

burger.addEventListener('click',burgerClickHandler);
