// SLIDER
const swiper = new Swiper('.slider-main-block', {
    // Optional parameters
    loop: true,
    speed: 1000,
  
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next.body-main-block__arrow',
      prevEl: '.swiper-button-prev.body-main-block__arrow',
    },
    
    autoplay: {
      delay: 2700,
    }
  });

// TABS

const tabNavItems = document.querySelectorAll('.tabs-deals__button');
const tabItems = document.querySelectorAll('.item-tabs');

document.addEventListener("click", function(e) {
  const targetElement = e.target; // target - елемент, на який ми натиснули
  let currentActiveIndex = null;
  let newActiveIndex = null;
  if(targetElement.closest('.tabs-deals__button')) { //closest - перевіряє, чи є в елемента певний клас
    tabNavItems.forEach((tabNavItem, index) => {
      if(tabNavItem.classList.contains('active')) {
        currentActiveIndex = index;
        tabNavItem.classList.remove('active');
      }
      if(tabNavItem === targetElement) {
        newActiveIndex = index;
      }
    });
    targetElement.classList.add('active');
    tabItems[currentActiveIndex].classList.remove('active');
    tabItems[newActiveIndex].classList.add('active');
  }
});