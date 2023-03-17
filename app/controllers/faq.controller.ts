const accordions = document.querySelectorAll<HTMLDivElement>(".accordion_item");
const accordionSearchBar =
  document.querySelector<HTMLInputElement>(".faq .searchbar");

export const faqControllerInit = () => {
  accordions.forEach((accordion) => {
    const accordionHeader =
      accordion.querySelector<HTMLDivElement>(".accordion_header");
    accordionHeader?.addEventListener("click", () => {
      accordion.classList.toggle("opened");
      accordion.classList.toggle("closed");
    });
  });
};

export const faqSearchControllerInit = () => {
  accordionSearchBar?.addEventListener("keyup", () => {
    const searchTerm = accordionSearchBar.value;
    const searchTermLength = searchTerm.length;
    if (searchTermLength > 2) {
      filterFaqTerms(searchTerm);
    } else {
      resetFaqTerms();
    }
  });
};

const filterFaqTerms = (searchTerm: string) => {
  accordions.forEach((accordion) => {
    const wholeText = accordion.innerText;
    if (wholeText.includes(searchTerm)) {
      accordion.style.display = "";
    } else {
      accordion.style.display = "none";
    }
  });
};
const resetFaqTerms = () => {
  accordions.forEach((accordion) => {
    accordion.style.display = "";
  });
};
