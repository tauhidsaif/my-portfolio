import gsap from "gsap";

// Example GSAP animation
document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".hero-text", {
    duration: 2,
    opacity: 0,
    y: 50,
    ease: "bounce.out"
  });

  gsap.from(".card", {
    duration: 1.5,
    opacity: 0,
    y: 100,
    stagger: 0.3,
    ease: "elastic.out(1, 0.5)"
  });
});
