const nav = document.querySelector("nav");
const navLinks = nav.querySelectorAll("a");
const sections = document.querySelectorAll("section");

function removeActiveLinks() {
  navLinks.forEach((link) => link.parentElement.classList.remove("active"));
}

function hideSections() {
  sections.forEach((section) => section.classList.add("hidden"));
}

navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    removeActiveLinks();
    hideSections();
    link.parentElement.classList.add("active");

    const sectionId = document.querySelector(link.hash);
    sectionId.classList.remove("hidden");
  })
);
