export const leftAnim = [
  { transform: "translate(-300%)" },
  { transform: "translate(0%)" },
];
export const rightAnim = [
  { transform: "translate(300%)" },
  { transform: "translate(0%)" },
];

export const exitAnimLeft = [
  { transform: "translate(0%)" },
  { transform: "translate(-300%)" },
];
export const exitAnimRight = [
    { transform: "translate(0%)" },
    { transform: "translate(300%)" },
  ];
export const durationAnim = {
  duration: 500,
  iterations: 1,
};


export function animation(el, index) {
    if (!el.classList.value.includes("show") && index % 2 === 1) {
      el.animate(leftAnim, durationAnim);
  
      return;
    }
    if (!el.classList.value.includes("show") && index % 2 === 0) {
      el.animate(rightAnim, durationAnim);
  
      return;
    }
  }



