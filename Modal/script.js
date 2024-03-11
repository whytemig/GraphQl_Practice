const btnModal = document.querySelector("#modal");
const modalBody = document.querySelector(".modal-body");
const modalOverlay = document.querySelector(".modal__overlay");

btnModal.addEventListener("click", () => {
  modalBody.classList.add("open");
});

modalBody.addEventListener("click", () => {
  modalBody.classList.remove("open");
});

modalOverlay.addEventListener("click", () => {
  modalBody.classList.remove("open");
});
