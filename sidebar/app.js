"use strict";
const sidebar = document.querySelector(".sidebar");
const itemBtns = document.querySelectorAll(".item-toggle");
const closeBtn = document.querySelector(".sidebar-close");
const barWrapper = document.querySelector(".bar-wrapper");
const sideBarWrapper = document.querySelector(".sidebar-wrapper");
const tableWrapper = document.querySelector(".table-wrapper");
const favourites = document.querySelector(".saved-star");

itemBtns.forEach(function (itemBtn) {
  itemBtn.addEventListener("click", function (e) {
    const id = e.currentTarget.dataset.id;
    if (id == "home") {
      home.classList.toggle("show-list");
    } else if (id == "pocket") {
      pocket.classList.toggle("show-list");
    } else if (id == "history") {
      story.classList.toggle("show-list");
    } else if (id == "service") {
      service.classList.toggle("show-list");
    } else if (id == "saved") {
      saved.classList.toggle("show-list");
    }
  });
});

closeBtn.addEventListener("click", function () {
  barWrapper.classList.toggle("close");
  sideBarWrapper.classList.toggle("col-2");
  sideBarWrapper.classList.add("col-1");
  tableWrapper.classList.toggle("col-10");
  tableWrapper.classList.toggle("col-11");
});
