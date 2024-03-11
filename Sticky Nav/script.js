const nav = document.querySelector("nav");
const anchors = document.querySelectorAll("a");

const navPosition = nav.getBoundingClientRect().top;

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  nav.style.top = scrollPosition + "px";

  anchors.forEach((link) => {
    const sections = document.querySelector(link.hash);

    const offSet = 50;

    if (
      scrollPosition + offSet > sections.offsetTop &&
      scrollPosition + offSet < sections.offsetTop + sections.offsetHeight
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
