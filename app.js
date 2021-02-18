const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".links");
  const navLinks = document.querySelectorAll(".links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = ``)
        : (link.style.animation = `navLinkFade ease forwards ${
          index / 7 + 0.3
          }s`);
    });

    burger.classList.toggle("toggle");
  });
};

navSlide();


var search = document.getElementById("search");
var field = document.getElementById("field");
var icon = document.getElementById("icon");

function clicked() {
  search.classList.add("open");
  field.setAttribute("placeholder", "Search Nearby Homes ...");
  icon.setAttribute("src", "https://cdn4.iconfinder.com/data/icons/geomicons/32/672366-x-128.png");
  icon.setAttribute("onclick", "normal()");

}
function normal() {
  search.classList.remove("open");
  icon.setAttribute("src", "http://www.brambauer.de/img/search.png");
  icon.setAttribute("onclick", "clicked()");
}


