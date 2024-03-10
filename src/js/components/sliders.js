import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
new Swiper('.hero__slider', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  speed: 800,
  navigation: {
    prevEl: '.hero-slider-prev',
    nextEl: '.hero-slider-next'
  },
  pagination: {
    el: '.hero__pagination',
    clickable: true
  },
})
