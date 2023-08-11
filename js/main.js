
const menu = document.querySelector(".nav-mobile__list");
const mMenuToggle = document.querySelector(".nav-mobile-burger");
const nav = document.querySelector("nav");
const menuList = document.querySelector('.nav-mobile__list')
const btn = document.querySelector('.header-content__button')
const modal = document.querySelector('.modal')
const btnM = document.querySelector('.modal__close')
let modalDialog;

const openMenu = () => {
  nav.classList.add("open");
  menuList.classList.add("open");

};

const closeMenu = () => {
  nav.classList.remove("open");
  menuList.classList.remove("open");
};

mMenuToggle.addEventListener("click", (event) => {
  nav.classList.contains('open') ? closeMenu() : openMenu();
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.toggle("open");
  modalDialog = modal.querySelector(".modal__wrapper");
  modal.addEventListener("click", (event) => {
    if (!event.composedPath().includes(modalDialog) || event.composedPath().includes(btnM)) {
      modal.classList.remove("open")
    }
  });
});

document.addEventListener('keyup', (event) => {
  if (event.key == "Escape" && modal.classList.contains("open")) {
    modal.classList.toggle("open");
  }
});


const swiper = new Swiper('.swiper', {
  speed: 400,
  slidesPerView: 1,
  spaceBetween: 29,
  loop: true,
  navigation: {
    nextEl: '.swiper__button-next',
    prevEl: '.swiper__button-prev',
  },
});

