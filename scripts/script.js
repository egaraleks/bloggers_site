// Filter bloggers

$(function(){
    var $filterPlatform = $('#FilterPlatform'),
        $filterDirection = $('#FilterDirection')
        $container = $('#Container');
    
    $container.mixItUp();
    
    $filterPlatform.on('change', function(){
      $container.mixItUp('filter', this.value);
    });

    $filterDirection.on('change', function(){
      $container.mixItUp('filter', this.value);
    });
    
  });

  // Selector(formstyler)

  $('select').styler()

 
  // Block loading

  const animItems = document.querySelectorAll('._anim-items');

  if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemoffset = offset(animItem).top;
        const animStart = 8;

       let animItemPoint = window.innerHeight  - animItemHeight / animStart;

       if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
       }


       if ((pageYOffset > animItemoffset - animItemPoint) && pageYOffset < (animItemoffset + animItemHeight)){
        animItem.classList.add('_active');
       }else{
        animItem.classList.remove('_active');
       }

      }
    }
    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
      
    }
    animOnScroll();
  }

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