const title = document.querySelector<HTMLElement>(".logo_text");
const breakPoint = 960;

export const responsiveTitleControllerInit = () => {
  const responsiveWindow = window.matchMedia(`(max-width: ${breakPoint}px)`);
  responsiveWindow.addEventListener("change", (ev) => {
    if (responsiveWindow.matches) {
      title!.innerHTML = `<h3>e/s/d Madrid</h3>`;
    } else {
      title!.innerHTML = `<h3>Escuela Superior de Diseño Madrid</h3>`;
    }
  });
};
