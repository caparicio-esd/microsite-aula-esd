// https://codepen.io/aslhnates/pen/VOVNvb

import "swiper/swiper-bundle.min.css";
import Swiper, { Navigation, Pagination } from "swiper";

export const initDesktopSwiperController = () => {
  const desktopSwiperContainer =
    document.querySelector<HTMLDivElement>(".desktop_swiper");
  const desktopSwiper = new Swiper(desktopSwiperContainer!, {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 32,
    freeMode: true,
    modules: [Pagination, Navigation],
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    preventClicksPropagation: true,
    preventInteractionOnTransition: true,
  });
};
