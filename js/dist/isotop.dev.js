"use strict";

var elem = document.querySelector('.news__inner');
var iso = new Isotope(elem, {
  // options
  itemSelector: '.news__item',
  layoutMode: 'masonry',
  masonry: {
    columnWidth: 50,
    gutter: 10
  }
});