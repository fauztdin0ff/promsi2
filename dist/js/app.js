/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/*------------------------------
article slider
---------------------------*/
const articleSlider = document.querySelector(".fv-article__slider");

if (articleSlider) {
   const articleSwiper = new Swiper(articleSlider, {
      slidesPerView: 1,
      loop: true,
      navigation: {
         nextEl: '.fv-article__next',
         prevEl: '.fv-article__prev',
      },
   });
}

/*------------------------------
Move nav in article
---------------------------*/
document.addEventListener('DOMContentLoaded', function () {
   const menu = document.querySelector('.fv-article__menu');
   const aside = document.querySelector('.fv-article__aside');
   const mobileContainer = document.querySelector('.fv-article__menu-mob');

   function moveMenu() {
      if (!menu || !aside || !mobileContainer) return;

      if (window.innerWidth <= 1023) {
         if (!mobileContainer.contains(menu)) {
            mobileContainer.appendChild(menu);
         }
      } else {
         if (!aside.contains(menu)) {
            aside.appendChild(menu);
         }
      }
   }

   moveMenu();
   window.addEventListener('resize', moveMenu);
});

/*------------------------------
related slider
---------------------------*/
const relatedSlider = document.querySelector(".related__slider");

if (relatedSlider) {
   const relatedSwiper = new Swiper(relatedSlider, {
      loop: false,
      spaceBetween: 30,
      navigation: {
         nextEl: '.related__slider-next',
         prevEl: '.related__slider-prev',
      },
      breakpoints: {
         320: {
            slidesPerView: 1,
         },
         768: {
            slidesPerView: 2,
         },
         1024: {
            slidesPerView: 3,
         },
         1920: {
            slidesPerView: 3,
            watchOverflow: true,
         }
      }
   });
}


/*------------------------------
Accordion
---------------------------*/
document.addEventListener('DOMContentLoaded', function () {
   const accordion = document.querySelector('.documentation__content');

   if (!accordion) return;

   accordion.addEventListener('click', function (e) {
      const btn = e.target.closest('.accordion__button');
      if (!btn) return;

      const currentItem = btn.closest('.accordion__item');
      if (!currentItem) return;

      currentItem.classList.toggle('active');
   });
});


/*------------------------------
Team gallery
---------------------------*/
document.querySelectorAll(".fv-team__slider").forEach((slider) => {
   const container = slider.closest(".fv-team");
   const nextBtn = container.querySelector(".fv-team__slider-next");
   const prevBtn = container.querySelector(".fv-team__slider-prev");

   const isClassroomSlider = slider.classList.contains("education__classroom-slider");

   new Swiper(slider, {
      slidesPerView: isClassroomSlider ? 1 : 1.2,
      centeredSlides: true,
      spaceBetween: 30,
      initialSlide: 1,
      loop: false,
      navigation: {
         nextEl: nextBtn,
         prevEl: prevBtn,
      },
      breakpoints: {
         320: {
            spaceBetween: 10,
            slidesPerView: isClassroomSlider ? 1 : 1.2
         },
         768: {
            spaceBetween: 10,
            slidesPerView: isClassroomSlider ? 1 : 1.2
         },
         1024: {
            spaceBetween: 30,
            slidesPerView: isClassroomSlider ? 1 : 2
         }
      }
   });
});


document.addEventListener('DOMContentLoaded', function () {
   const galleryItems = document.querySelectorAll('[data-fancybox="team-gallery"]');

   if (galleryItems.length > 0) {
      Fancybox.bind('[data-fancybox="team-gallery"]', {
         Thumbs: true,
         Toolbar: {
            display: [
               "zoom",
               "close"
            ]
         }
      });
   }
});


/*------------------------------
Upload file
---------------------------*/
document.addEventListener('DOMContentLoaded', function () {
   const fileInput = document.querySelector('.upload-file input[type="file"]');
   const fileContainer = document.querySelector('.upload-file-container');

   if (fileInput && fileContainer) {
      fileInput.addEventListener('change', function () {
         const file = fileInput.files[0];
         if (file) {
            fileContainer.textContent = file.name;
         } else {
            fileContainer.textContent = '';
         }
      });
   }
});


/*------------------------------
Move nav in article
---------------------------*/
document.addEventListener('DOMContentLoaded', function () {
   const sendForm = document.querySelector('.send-resume__card');
   const sendFormBody = document.querySelector('.send-resume__body');
   const mobileContainer = document.querySelector('.send-resume-mob');

   function moveForm() {
      if (!sendForm || !sendFormBody || !mobileContainer) return;

      if (window.innerWidth <= 1023) {
         if (!mobileContainer.contains(sendForm)) {
            mobileContainer.appendChild(sendForm);
         }
      } else {
         if (!sendFormBody.contains(sendForm)) {
            sendFormBody.appendChild(sendForm);
         }
      }
   }

   moveForm();
   window.addEventListener('resize', moveForm);
});

/*------------------------------
Tabs podbor
---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const tabsContainer = document.querySelector('.selection__tabs');
   const groupsContainer = document.querySelector('.selection__groups');

   if (!tabsContainer || !groupsContainer) return;

   const tabs = tabsContainer.querySelectorAll('.selection__tab');
   const groups = groupsContainer.querySelectorAll('.selection__group');

   if (!tabs.length || !groups.length) return;

   tabs.forEach(tab => {
      tab.addEventListener('click', () => {
         const tabId = tab.dataset.tab;

         tabs.forEach(t => t.classList.remove('active'));
         groups.forEach(g => g.classList.remove('active'));

         tab.classList.add('active');
         const activeGroup = groupsContainer.querySelector(`.selection__group[data-group="${tabId}"]`);
         if (activeGroup) activeGroup.classList.add('active');
      });
   });
});


/*------------------------------
Product preview sliders
---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   // Главный слайдер
   const mainSliderEl = document.querySelector(".selection__results-slider");

   if (mainSliderEl) {
      const mainSlider = new Swiper(mainSliderEl, {
         slidesPerView: 4,
         spaceBetween: 30,
         loop: false,
         navigation: {
            nextEl: '.selection__results-slider-next',
            prevEl: '.selection__results-slider-prev'
         },
         pagination: {
            el: '.selection__results-pagination',
            clickable: true,
         },
         breakpoints: {
            320: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1300: { slidesPerView: 4 },
         }
      });
   }

   // Внутренние слайдеры в карточках
   const innerSliders = document.querySelectorAll('.product-preview__images');

   innerSliders.forEach((slider) => {
      const paginationEl = slider.querySelector('.product-preview__images-pagination');
      if (!paginationEl) return;

      const swiperInstance = new Swiper(slider, {
         loop: true,
         nested: true,
         init: false,
         pagination: {
            el: paginationEl,
            clickable: true,
            type: 'bullets',
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
         },
      });

      swiperInstance.on('init', () => {
         swiperInstance.pagination.bullets.forEach((bullet, i) => {
            bullet.addEventListener('mouseenter', () => {
               swiperInstance.slideToLoop(i);
            });

            bullet.addEventListener('click', (e) => {
               e.stopPropagation();
               e.preventDefault();
            });
         });
      });

      swiperInstance.init();
   });
});


/*------------------------------
More products sliders
---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const moreProductsliders = document.querySelectorAll(".more-products__slider");

   moreProductsliders.forEach((slider, index) => {
      const moreProductsContainer = slider.closest(".more-products");

      if (!moreProductsContainer) return;

      const nextBtn = moreProductsContainer.querySelector(".more-products__next");
      const prevBtn = moreProductsContainer.querySelector(".more-products__prev");

      new Swiper(slider, {
         slidesPerView: 4,
         spaceBetween: 30,
         loop: false,
         navigation: {
            nextEl: nextBtn,
            prevEl: prevBtn
         },
         breakpoints: {
            320: {
               slidesPerView: 1.3,
               spaceBetween: 10,
            },
            600: {
               slidesPerView: 2,
            },
            1024: {
               slidesPerView: 3,
            },
            1300: {
               slidesPerView: 4,
            }
         }
      });
   });
});

/*------------------------------
Open filters 
---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const toggleBtn = document.querySelector(".fv-wishlist__sidebar-toggle");
   const sidebar = document.querySelector(".fv-wishlist__filters");

   if (toggleBtn && sidebar) {
      toggleBtn.addEventListener("click", function () {
         toggleBtn.classList.toggle("active");
         sidebar.classList.toggle("opened");
      });
   }
});


/*------------------------------
partnership slider
---------------------------*/
document.querySelectorAll(".partnership__slider").forEach((slider) => {
   const container = slider.closest(".partnership");
   const nextBtn = container.querySelector(".partnership__slider-next");
   const prevBtn = container.querySelector(".partnership__slider-prev");

   if (nextBtn && prevBtn) {
      new Swiper(slider, {
         slidesPerView: 'auto',
         spaceBetween: 20,
         loop: true,
         navigation: {
            nextEl: nextBtn,
            prevEl: prevBtn,
         },
         breakpoints: {
            320: {
               spaceBetween: 10,
            },
            768: {
               spaceBetween: 20,
            },
         }
      });
   }

   const fancyItems = container.querySelectorAll('[data-fancybox]');
   if (fancyItems.length > 0) {
      Fancybox.bind(fancyItems, {
         Thumbs: {
            autoStart: false,
         },
         Toolbar: {
            display: ['zoom', 'close'],
         },
      });
   }
});


/*------------------------------
Popups
---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const openButtons = document.querySelectorAll('.open-popup');

   if (openButtons.length > 0) {
      openButtons.forEach(button => {
         button.addEventListener('click', function () {
            const popupId = this.dataset.popup;
            const popup = document.getElementById(popupId);

            if (popup) {
               popup.classList.add('show');
               document.body.style.overflow = 'hidden';
            }
         });
      });
   }

   document.addEventListener('click', function (e) {
      const openPopup = document.querySelector('.fv-popup.show');

      if (openPopup) {
         const isCloseBtn = e.target.closest('.fv-popup__close');
         const isInsideBody = e.target.closest('.fv-popup__body');

         if (isCloseBtn || (!isInsideBody && e.target.closest('.fv-popup'))) {
            openPopup.classList.remove('show');
            document.body.style.overflow = '';
         }
      }
   });
});


/*------------------------------
Filters
---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const filterButton = document.querySelector('.education__filters-button');
   const filterBody = document.querySelector('.education__filters-body');

   if (filterButton && filterBody) {
      filterButton.addEventListener('click', () => {
         filterBody.classList.toggle('show');
         filterButton.classList.toggle('active');
      });
   }
});


/*------------------------------
Education tabs
---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const tabButtons = document.querySelectorAll('.education__tag');
   const tabContents = document.querySelectorAll('.education__content');

   if (tabButtons.length && tabContents.length) {
      tabButtons.forEach(button => {
         button.addEventListener('click', () => {
            const tabId = button.dataset.tab;

            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('show'));

            button.classList.add('active');
            const targetContent = document.querySelector(`.education__content[data-content="${tabId}"]`);
            if (targetContent) {
               targetContent.classList.add('show');
            }
         });
      });

   }
});


/*------------------------------
Education sliders
---------------------------*/
const educationSliders = document.querySelectorAll(".education__slider");
const swiperInstances = new WeakMap();

function initSliders() {
   educationSliders.forEach((slider) => {
      const container = slider.closest(".education__content");
      const nextBtn = container.querySelector(".education__slider-next");
      const prevBtn = container.querySelector(".education__slider-prev");
      const isMobile = window.innerWidth < 767;

      if (isMobile && !swiperInstances.has(slider)) {
         if (nextBtn && prevBtn) {
            const swiper = new Swiper(slider, {
               slidesPerView: 'auto',
               spaceBetween: 30,
               loop: false,
               navigation: {
                  nextEl: nextBtn,
                  prevEl: prevBtn,
               },
               breakpoints: {
                  320: {
                     spaceBetween: 10,
                  },
                  768: {
                     spaceBetween: 20,
                  },
               },
            });
            swiperInstances.set(slider, swiper);
         }
      } else if (!isMobile && swiperInstances.has(slider)) {
         const swiper = swiperInstances.get(slider);
         swiper.destroy(true, true);
         swiperInstances.delete(slider);
      }
   });
}
initSliders();
window.addEventListener("resize", () => {
   initSliders();
});


/*------------------------------
Education subsliders
---------------------------*/
const educationSubslider = document.querySelector(".education__subslider");

if (educationSubslider) {
   const educationSubswiper = new Swiper(educationSubslider, {
      slidesPerView: 'auto',
      spaceBetween: 30,
      loop: false,
      navigation: {
         nextEl: '.education__subslider-next',
         prevEl: '.education__subslider-prev',
      },
      breakpoints: {
         320: {
            spaceBetween: 10
         },
         768: {
            spaceBetween: 10
         },
         1024: {
            spaceBetween: 30
         }
      }
   });
};


/*------------------------------
Videoplayer
---------------------------*/
document.querySelectorAll('.fv-player').forEach((player) => {
   const playBtn = player.querySelector('.fv-player__play');
   const video = player.querySelector('.fv-player__video');

   if (!playBtn || !video) return;

   playBtn.addEventListener('click', () => {
      video.play();
      playBtn.style.display = 'none';
      video.setAttribute('controls', '');
   });

   video.addEventListener('click', () => {
      if (!video.paused) {
         video.pause();
         playBtn.style.display = '';
         video.removeAttribute('controls');
      }
   });
});


/*------------------------------
Calendar
---------------------------*/
document.addEventListener('DOMContentLoaded', function () {
   const datepickerEl = document.querySelector('#datepicker');

   // Проверка на наличие календаря
   if (!datepickerEl) return;

   const rawDates = datepickerEl.dataset.activeDates || '';
   const activeDates = rawDates.split(',').map(date => date.trim());

   new AirDatepicker(datepickerEl, {
      dateFormat: 'dd.MM.yyyy',
      visible: true,
      onRenderCell({ date, cellType }) {
         if (cellType === 'day') {
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            const formatted = `${day}.${month}.${year}`;

            if (activeDates.includes(formatted)) {
               return {
                  classes: 'active-day',
                  attrs: {
                     title: 'Есть вебинар'
                  }
               };
            }
         }
      }
   });
});


/*------------------------------Scroll---------------------------*/
/* document.addEventListener('DOMContentLoaded', function () {
   const wrapper = document.querySelector('.compare__wrapper');
   const scrollBtnRight = document.querySelector('.compare__scroll-right');
   const scrollBtnLeft = document.querySelector('.compare__scroll-left');
   if (!wrapper || !scrollBtnRight || !scrollBtnLeft) return;

   let isDown = false;
   let startX;
   let scrollLeft;

   wrapper.addEventListener('mousedown', (e) => {
      isDown = true;
      wrapper.classList.add('dragging');
      startX = e.pageX - wrapper.offsetLeft;
      scrollLeft = wrapper.scrollLeft;
   });

   wrapper.addEventListener('mouseleave', () => {
      isDown = false;
      wrapper.classList.remove('dragging');
   });

   wrapper.addEventListener('mouseup', () => {
      isDown = false;
      wrapper.classList.remove('dragging');
   });

   wrapper.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - wrapper.offsetLeft;
      const walk = (x - startX) * 1.5;
      wrapper.scrollLeft = scrollLeft - walk;
   });

   scrollBtnRight.addEventListener('click', () => {
      wrapper.scrollBy({
         left: 360,
         behavior: 'smooth',
      });
   });

   scrollBtnLeft.addEventListener('click', () => {
      wrapper.scrollBy({
         left: -360,
         behavior: 'smooth',
      });
   });

   const checkScrollEnd = () => {
      const scrollLeftValue = wrapper.scrollLeft;
      const scrollRightValue = wrapper.scrollWidth - wrapper.clientWidth - scrollLeftValue;

      scrollBtnLeft.classList.toggle('hidden', scrollLeftValue < 5);
      scrollBtnRight.classList.toggle('hidden', scrollRightValue < 5);
   };

   wrapper.addEventListener('scroll', checkScrollEnd);
   window.addEventListener('resize', checkScrollEnd);
   checkScrollEnd();

   const observer = new IntersectionObserver(
      (entries) => {
         entries.forEach(entry => {
            const isVisible = entry.isIntersecting;
            scrollBtnLeft.style.display = isVisible ? 'block' : 'none';
            scrollBtnRight.style.display = isVisible ? 'block' : 'none';
         });
      },
      {
         threshold: 0.2,
      }
   );

   observer.observe(wrapper);
}); */

const tableBody = document.querySelector(".compare__body");
const headRow = document.querySelector(".head-row");
const btnLeft = document.querySelector(".compare__scroll-left");
const btnRight = document.querySelector(".compare__scroll-right");

// фиксирование шапки при вертикальном скролле
document.addEventListener("scroll", () => {
   const section = document.querySelector(".compare");
   const headRow = section?.querySelector(".head-row");
   if (!section || !headRow) return;

   const rect = section.getBoundingClientRect();

   // фикс
   const offsetTop = window.innerWidth < 767 ? 20 : 90;

   if (rect.top <= offsetTop) {
      headRow.classList.add("fixed");
   } else {
      headRow.classList.remove("fixed");
   }

   // конец секции
   if (rect.bottom <= 257) {
      headRow.classList.add("full");
   } else {
      headRow.classList.remove("full");
   }

   // скрытие кнопок если compare ниже 50vh
   const halfScreen = window.innerHeight * 0.5;
   if (rect.bottom <= halfScreen) {
      btnLeft.classList.add("hidden");
      btnRight.classList.add("hidden");
   } else {
      btnLeft.classList.remove("hidden");
      btnRight.classList.remove("hidden");
   }
});

// синхронизация горизонтального скролла для fixed-строки
tableBody.addEventListener("scroll", () => {
   const fixedRow = document.querySelector(".head-row.fixed");
   if (fixedRow) {
      fixedRow.scrollLeft = tableBody.scrollLeft;
   }
   updateButtons();
});

// ширина одной колонки
function getColumnWidth() {
   const firstCell = tableBody.querySelector(".compare__table-row-wrapper > *");
   return firstCell ? firstCell.offsetWidth : 150;
}

// обновление состояния кнопок
function updateButtons() {
   const maxScrollLeft = tableBody.scrollWidth - tableBody.clientWidth;

   if (tableBody.scrollLeft <= 0) {
      btnLeft.classList.add("disabled");
   } else {
      btnLeft.classList.remove("disabled");
   }

   if (tableBody.scrollLeft >= maxScrollLeft - 1) {
      btnRight.classList.add("disabled");
   } else {
      btnRight.classList.remove("disabled");
   }
}

// кнопки
btnLeft.addEventListener("click", () => {
   if (btnLeft.classList.contains("disabled")) return;
   tableBody.scrollBy({ left: -getColumnWidth(), behavior: "smooth" });
});
btnRight.addEventListener("click", () => {
   if (btnRight.classList.contains("disabled")) return;
   tableBody.scrollBy({ left: getColumnWidth(), behavior: "smooth" });
});

// перетаскивание мышью
let isDown = false;
let startX;
let scrollLeft;

tableBody.addEventListener("mousedown", (e) => {
   isDown = true;
   tableBody.classList.add("dragging");
   startX = e.pageX - tableBody.offsetLeft;
   scrollLeft = tableBody.scrollLeft;
});
tableBody.addEventListener("mouseleave", () => {
   isDown = false;
   tableBody.classList.remove("dragging");
});
tableBody.addEventListener("mouseup", () => {
   isDown = false;
   tableBody.classList.remove("dragging");
});
tableBody.addEventListener("mousemove", (e) => {
   if (!isDown) return;
   e.preventDefault();
   const x = e.pageX - tableBody.offsetLeft;
   const walk = (x - startX) * 1; // скорость
   tableBody.scrollLeft = scrollLeft - walk;
});

// поддержка тача
let touchStartX = 0;
let touchScrollLeft = 0;

tableBody.addEventListener("touchstart", (e) => {
   touchStartX = e.touches[0].pageX;
   touchScrollLeft = tableBody.scrollLeft;
});
tableBody.addEventListener("touchmove", (e) => {
   const x = e.touches[0].pageX;
   const walk = (x - touchStartX) * 1;
   tableBody.scrollLeft = touchScrollLeft - walk;
});

// инициализация
updateButtons();

/******/ })()
;