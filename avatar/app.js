const elAvatarLittle = document.querySelector(".avatar__little");
const elUser = document.querySelector(".user");
elAvatarLittle.addEventListener("click", () => {
  elUser.classList.toggle("user-open");
});
