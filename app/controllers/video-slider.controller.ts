const iframeSrcDesktop = [
  "BNy4_M7ftbM",
  "RG01gTD_tMM",
  "3C6ZzuIgC90",
  "O_uBNSrlvKs",
  "4X9wfxxxYFA",
];
let desktopActivePlayer = null;
const desktopPlayers = [];

export const initDesktopSwiperController = () => {
  setYTApiDeclaration();
};

const setYTApiDeclaration = () => {
  var tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag!.parentNode!.insertBefore(tag, firstScriptTag);
};

globalThis.onYouTubeIframeAPIReady = () => {
  console.log("youtube ready");
  renderDesktopGallery();
};

const renderDesktopGallery = () => {
  const desktopGallery = document.querySelector<HTMLDivElement>(
    ".desktop_swiper_wrapper"
  );
  desktopGallery!.innerHTML = "";
  const iframes = [...iframeSrcDesktop];

  iframes.forEach((iframe, i) => {
    const desktopFrame = document.createElement("div");
    desktopFrame.style.flexBasis = Math.min(innerWidth * 0.7, 600) + "px";
    desktopFrame.style.flexShrink = "0";

    desktopFrame.className =
      "desktop_swiper_box swiper-slide bg-slate-1000 shrink-0 block snap-center snap-always";
    desktopFrame.id = `desktop_swiper_box_${i}`;
    desktopGallery?.appendChild(desktopFrame);

    //@ts-ignore
    desktopPlayers[i] = new YT.Player(`desktop_swiper_box_${i}`, {
      width: `${Math.max(innerWidth * 0.4, 600)}`,
      height: `${Math.max(innerWidth * 0.4, 600) / (16 / 9)}`,
      videoId: iframe,
      events: {
        onReady: (ev) => {
          console.log(ev);
        },
        onStateChange: (ev) => {
          //@ts-ignore
          if (ev.data == YT.PlayerState.PLAYING) {
            if (desktopActivePlayer && desktopActivePlayer != ev.target) {
              //@ts-ignore
              desktopActivePlayer.pauseVideo();
            }
            desktopActivePlayer = ev.target;
            return;
            // } else if (ev.data == 2) {
            desktopActivePlayer = null;
            return;
          } else {
            // desktopActivePlayer = null;
          }
        },
      },
    });
  });
};
