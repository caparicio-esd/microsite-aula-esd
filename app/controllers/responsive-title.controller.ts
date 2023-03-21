const title = document.querySelector<HTMLElement>(".logo_text");
const breakPoint = 768;

export const responsiveTitleControllerInit = () => {
  const responsiveWindow = window.matchMedia(`(max-width: ${breakPoint}px)`);
  matchingFunction(responsiveWindow);
  responsiveWindow.addEventListener("change", () =>
    matchingFunction(responsiveWindow)
  );
};

const matchingFunction = (responsiveWindow) => {
  if (responsiveWindow.matches) {
    title!.innerHTML = `<h3>ESDMadrid</h3>`;
  } else {
    title!.innerHTML = `<h3>Escuela Superior de Diseño Madrid</h3>`;
  }
};
