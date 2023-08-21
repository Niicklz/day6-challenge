import { animation, exitAnimLeft, exitAnimRight, durationAnim } from "./animations.js";
const cards = document.querySelectorAll(".card");
function showFirstCards() {
  cards.forEach((card) => {
    if (card.getBoundingClientRect().top < window.innerHeight) {
      card.classList.add("show");
    }
  });
}

showFirstCards();

window.addEventListener("scroll", () => {
  cards.forEach((el, index) => {
    let cardPosition = el.getBoundingClientRect().top;
    let maxHeight = window.innerHeight/1.3;

    if (cardPosition < maxHeight) {
      animation(el, index);
      el.classList.add("show");
    }
    if (cardPosition > maxHeight) {
      if (el.classList.value.includes("show")) {
        index % 2 === 1
          ? el.animate(exitAnimLeft, durationAnim)
          : el.animate(exitAnimRight, durationAnim);
      }

      el.classList.remove("show");
    }
  });
});
