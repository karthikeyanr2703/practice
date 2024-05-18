let link = document.querySelector("#link");
link.addEventListener("mouseenter", function () {
  gsap.to("#link h2", {
    y: "-104%",
    stagger: 0.04,
    ease: "none",
    duration: 0.2,
  });
});

link.addEventListener("mouseleave", function () {
  gsap.to("#link h2", {
    y: "0%",
    duration: 0,
    ease: "none",
  });
});
