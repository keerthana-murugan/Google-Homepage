let primaryNavbar = document.getElementById("nav-results-page");
let isScrolling = false;
window.onscroll = () => {
  isScrolling = true;
};

setInterval(() => {
  if (isScrolling) {
    if (window.scrollY >= 35) {
      primaryNavbar.classList.add("nav-scroll");
    } else {
      primaryNavbar.classList.remove("nav-scroll");
    }
    isScrolling = false;
  }
}, 100);
