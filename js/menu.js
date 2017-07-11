'use strict';

var allDiv = 5;
var i;
var linkList = document.querySelector('.main-nav__list');
//var dialogWindow = document.querySelector('.page-sections__item');
//
var removeActive = function () {
  var linkActive = document.querySelector('.main-nav__link--active');

  if (linkActive) {
    linkActive.classList.remove('main-nav__link--active');
  }
};

function showDv(n) {
  for (i = 1; allDiv + 1 > i; i++) {
    document.getElementById('d' + i).style.display = 'none';
  }
  document.getElementById('d' + n).style.display = 'block';
}

//var clickLegacy = function () {
//  var target = event.target;
//
//  while (target !== pinMap) {
//    if (target.className === 'main-nav__link') {
//      target.classList.add('main-nav__link--active');
//    }
//    target = target.parentNode;
//  }
//};
//
var toggleSection = function (event) {
  removeActive();
//  clickLegacy();
//  showDv();
};

linkList.addEventListener('click', toggleSection);
