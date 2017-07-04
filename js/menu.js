'use strict';


$(document).ready(function () {
    $('.main-nav__link').click(function () {
        var $clicked = $(this)
        $('.main-nav__link').each(function(){
            var $menu = $(this);
            if (!$menu.is($clicked))
            {
                $($menu.attr('data-item')).hide();
            }
        });
        $($clicked.attr('data-item')).toggle();
    });
});

//var menuItemList = document.querySelector('.main-nav__list');
//var menuItem = document.querySelector('.main-nav__link');
//var menuItemHome = document.querySelector('.main-nav__link--home');
//var menuItemTrailer = document.querySelector('.main-nav__link--trailer');
//var menuItemPhotos = document.querySelector('.main-nav__link--photos');
//var menuItemCast = document.querySelector('.main-nav__link--cast');
//var menuItemPosters = document.querySelector('.main-nav__link--posters');
//var pageSection = document.querySelector('.page-sections__item');
//var pageSectionHome = document.querySelector('.page-sections__item--home');
//var pageSectionTrailer = document.querySelector('.page-sections__item--trailer');
//var pageSectionPhotos = document.querySelector('.page-sections__item--photos');
//var pageSectionCast = document.querySelector('.page-sections__item--cast');
//var pageSectionPosters = document.querySelector('.page-sections__item--posters');
//
//var ENTER_KEY = 13;
//
//// удаляем активные классы у меток
//var removeActive = function () {
//  var menuItemActive = document.querySelector('.main-nav__link--active');
//
//  if (menuItemActive) {
//    menuItemActive.classList.remove('main-nav__link--active');
//  }
//};

//var closeDialog = function () {
//  dialogWindow.style.display = 'none';
//  removeActive();
//  dialogClose.setAttribute('aria-pressed', true);
//};
//
//var clickLegacy = function () {
//  var target = event.target;
//
//  while (target !== pinMap) {
//    if (target.className === 'pin') {
//      target.classList.add('pin--active');
//    }
//    target = target.parentNode;
//  }
//};

// обработчик события по клику на пин
//var togglePin = function (event) {
//  removeActive();
//  clickLegacy();
//  dialogWindow.style.display = 'block';
//};

// создадим цикл который проверяет наличие у .pin еще одного класса .pin--active
// если класс есть, удаляем его
// цикл больше не нужен так как мы делегируем клики на саму карту с пинами
// for (var i = 0; i < pin.length; i++) {
//  pin[i].addEventListener('click', togglePin);
//  pin[i].addEventListener('keydown', togglePin);
// }

//menuItemList.addEventListener('click', togglePin);

// обработчик события закрытия окна и удаления активного класса у элемента по клику на крестик
//dialogClose.addEventListener('click', function () {
//  closeDialog();
//  removeActive();
//});