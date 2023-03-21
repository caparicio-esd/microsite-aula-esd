const iconMenu = document.querySelector<HTMLDivElement>(
  ".mobile_menu .icon_menu"
);
const menuText = document.querySelector<HTMLDivElement>(".mobile_menu");
const menuTextElements =
  document.querySelectorAll<HTMLDivElement>(".mobile_menu li");

export const headerMobileButtonController = () => {
  iconMenu!.addEventListener("click", () => {
    menuText!.classList.toggle("opened");
  });
  menuTextElements.forEach((menuTextElement) => {
    menuTextElement.addEventListener("click", () => {
      menuText!.classList.remove("opened");
    });
  });
};
