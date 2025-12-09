$(document).ready(function () {
  $(".fade").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    slide: "div",
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

document.addEventListener("DOMContentLoaded", function (){
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark"){
    document.body.classList.add("dark-mode");
  }
});
