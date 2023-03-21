const upButton = document.querySelector<HTMLElement>("#up");

const breakPoint = 768;

export const topButtonControllerInit = () => {
  const responsiveWindow = window.matchMedia(`(max-width: ${breakPoint}px)`);
  matchingFunction(responsiveWindow)
  responsiveWindow.addEventListener("change", (ev) => matchingFunction(responsiveWindow));
};
const matchingFunction = (responsiveWindow) => {
  if (responsiveWindow.matches) {
    setButtonToLarge();
  } else {
    setButtonToSmall();
  }
};
const setButtonToLarge = () => {
  upButton?.classList.add("hidden_text");
  Object.assign(upButton?.style!, {
    paddingLeft: "16px",
    paddingRight: "16px",
  } as CSSStyleDeclaration);
};
const setButtonToSmall = () => {
  upButton?.classList.remove("hidden_text");
  Object.assign(upButton?.style!, {
    paddingLeft: "",
    paddingRight: "",
  } as CSSStyleDeclaration);
};
