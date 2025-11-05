// MENÚ

let burger = document.querySelector(".burger > i");
let menu_opt = document.querySelector(".menu");

burger.addEventListener("click", function(){

    burger.classList.toggle("fa-bars");
    burger.classList.toggle("fa-times");
    menu_opt.classList.toggle("menu-show");

});

// IMAGEN HEADER
const headerImg = document.querySelector('.img-header img');

function checkWidth() {
  if (window.innerWidth <= 678) {
    headerImg.src = 'img/merce_phone.png';
  } else {
    headerImg.src = 'img/merce_header.png';
  }
}

window.addEventListener('resize', checkWidth);
window.addEventListener('load', checkWidth);
