"use strict";

const mobileNavBtnEl = document.querySelector(".mobile-nav-btn");
const headerNavEl = document.querySelector(".header__nav");
const industriesEl = document.querySelector(".industries");
const industriesMenuEl = document.querySelector(".industries__menu");

const OpenNavF = function () {
  headerNavEl.classList.toggle("open-nav");
  mobileNavBtnEl.classList.toggle("open-nav");
};

const showIndustriesMenuF = function () {
  industriesEl.classList.add("show-industries-menu");
};
const hideIndustriesMenuF = function () {
  industriesEl.classList.remove("show-industries-menu");
};

mobileNavBtnEl.addEventListener("click", OpenNavF);
// industriesMenuEl.addEventListener("click", hideIndustriesMenuF);
industriesMenuEl.addEventListener("mouseover", showIndustriesMenuF);
industriesMenuEl.addEventListener("mouseout", hideIndustriesMenuF);
