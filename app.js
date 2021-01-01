//Top of Document

var navBar = document.getElementById('stickyNav');
var stickyHeight = navBar.offsetHeight;

window.onscroll = function() {
  if (window.pageYOffset > stickyHeight) {
    navBar.classList.add('scrolled')
  } else {
    navBar.classList.remove('scrolled')
  }
};
