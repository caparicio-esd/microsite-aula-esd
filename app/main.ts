import "./../assets/styles/style.sass";

import { faqControllerInit, faqSearchControllerInit } from "./controllers/faq.controller";
import { responsiveTitleControllerInit } from "./controllers/responsive-title.controller";
import { topButtonControllerInit } from "./controllers/top-button.controller";
import { initDesktopSwiperController } from "./controllers/video-slider.controller";


// 
window.addEventListener("load", () => {
    topButtonControllerInit()
    responsiveTitleControllerInit()
    faqControllerInit()
    faqSearchControllerInit()
    initDesktopSwiperController()
})