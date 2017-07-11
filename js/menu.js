'use strict';

var allDiv = 5;
var i;
var pinMap = document.querySelector('.main-nav__list');

var removeActive = function () {
  var linkActive = document.querySelector('.main-nav__link--active');

  if (linkActive) {
    linkActive.classList.remove('main-nav__link--active');
  }
};

var showDv = function (n) {
  for (i = 1; allDiv + 1 > i; i++) {
    document.getElementById('d' + i).style.display = 'none';
  }
  document.getElementById('d' + n).style.display = 'block';
};

var clickLegacy = function () {
  var target = event.target;

  while (target !== pinMap) {
    if (target.className === 'main-nav__link') {
      target.classList.add('main-nav__link--active');
    }
    target = target.parentNode;
  }
};

var toggleSection = function (event) {
  removeActive();
  showDv();
  clickLegacy();
//  dialogWindow.style.display = 'block';
};
