// аккордеон в футере
new Accordion(".accordion-container");

// аккордеон в Услуги
new Accordion(".accordion-container_uslugi");

// бургер меню
document
  .querySelector(".header__btn_burger")
  .addEventListener("click", function () {
    document.querySelector(".header__nav").classList.add("active");
  });

document
  .querySelector(".header__nav_close")
  .addEventListener("click", function () {
    document.querySelector(".header__nav").classList.remove("active");
  });

// tooltip
tippy("#pay__tooltip", {
  theme: "light",
  allowHTML: true,
  content:
    '<p class="tooltip__header">Лицевой счет</p> <p class="tooltip__descr">8-значный номер в левом верхнем углу вашего платежного документа</p> <img src="img/pay_tooltip.png" />',
});

tippy("#popup__tooltip", {
  theme: "light",
  allowHTML: true,
  content:
    '<p class="tooltip__header">Лицевой счет</p> <p class="tooltip__descr">8-значный номер в левом верхнем углу вашего платежного документа</p> <img src="img/pay_tooltip.png" />',
});

// затемнение фона при открытии попапапа и само его открытие (авторизация)
// кнопка в шапке
document.querySelector(".header__btn").addEventListener("click", function () {
  document.querySelector(".dark__wrapper").classList.add("back_dark");
  document.querySelector(".popup_login").classList.add("popup_active");
});

// кнопка в баннере
document.querySelector(".hero__btn").addEventListener("click", function () {
  document.querySelector(".dark__wrapper").classList.add("back_dark");
  document.querySelector(".popup_login").classList.add("popup_active");
});

// открытие попапа (регистрация из формы авторизации)
document
  .querySelector(".popup__link_signup")
  .addEventListener("click", function () {
    document.querySelector(".popup_login").classList.remove("popup_active");
    document.querySelector(".popup_signup").classList.add("popup_active");
  });

// открытие попапа (авторизация из формы регистрации)
document
  .querySelector(".popup__link_login")
  .addEventListener("click", function () {
    document.querySelector(".popup_signup").classList.remove("popup_active");
    document.querySelector(".popup_login").classList.add("popup_active");
  });

// смена кнопки в шапке и текста в баннере при авторизации
document
  .querySelector(".popup__btn_login")
  .addEventListener("click", function () {
    document.querySelector(".header__button").classList.add("header_disactive");
    document.querySelector(".header__button_lk").classList.add("header_active");

    document.querySelector(".hero__text_notlk").classList.add("hero_disactive");
    document.querySelector(".hero__text_lk").classList.add("hero_active");
  });

// закрытие формы авторизации и/или регистрации по клику на область вне попапа
document.querySelector(".dark__wrapper").addEventListener("click", function () {
  document.querySelector(".back_dark").classList.remove("back_dark");
  document.querySelector(".popup_active").classList.remove("popup_active");
});
