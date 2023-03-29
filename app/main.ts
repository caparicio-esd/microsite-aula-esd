import "./../assets/styles/style.sass";
import { cookiesController } from "./controllers/cookies.controller";

import {
  faqControllerInit,
  faqSearchControllerInit,
} from "./controllers/faq.controller";
import { headerMobileButtonController } from "./controllers/header-mobile-button.controller";
import { responsiveTitleControllerInit } from "./controllers/responsive-title.controller";
import { topButtonControllerInit } from "./controllers/top-button.controller";
import { initDesktopSwiperController } from "./controllers/video-slider.controller";

//
window.addEventListener("DOMContentLoaded", () => {
  topButtonControllerInit();
  responsiveTitleControllerInit();
  faqControllerInit();
  faqSearchControllerInit();
  initDesktopSwiperController();
  headerMobileButtonController();
  cookiesController();
});
