const elCurrencyBtn = document.querySelector(".usd-wrapper");
const elCurrencyWrapper = document.querySelector(".currency-wrapper");
const elCurrency = document.querySelector(".currency");
elCurrencyBtn.addEventListener("mouseover", () => {
  elCurrencyWrapper.classList.add("currency-open");
  elDownImg.classList.add("animate__fadeInDown");
  elCurrency.classList.add("animate__zoomInDown");
});
elCurrencyBtn.addEventListener("mouseout", () => {
  elCurrencyWrapper.classList.remove("currency-open");
  elDownImg.classList.remove("animate__fadeInDown");
});
