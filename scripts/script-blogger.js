const swiper = new Swiper('.swiper', {
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
    },
    slidesPerView: 4,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    breakpoints: {
      1320: {
        slidesPerView: 3
      }
    }
  });

  // Cursor

let innerCursor = document.querySelector('.inner-cursor');
let outerCursor = document.querySelector('.outer-cursor');

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
  let x = e.clientX;
  let y = e.clientY;

  
  innerCursor.style.left = `${x}px`;
  innerCursor.style.top = `${y}px`;
  outerCursor.style.left = `${x}px`;
  outerCursor.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll("a"));

links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    innerCursor.classList.add("grow");
  })
  link.addEventListener("mouseleave", () => {
    innerCursor.classList.remove("grow");
  })
})

let actives = Array.from(document.querySelectorAll(".active"));


actives.forEach((active) => {
  active.addEventListener("mouseover", () => {
    innerCursor.classList.add("grow");
  })
  active.addEventListener("mouseleave", () => {
    innerCursor.classList.remove("grow");
  })
})

// Menu btn

document.querySelector('.menu__btn').onclick = () => {
  document.querySelector('.menu__list').classList.toggle('menu__list--active')
}