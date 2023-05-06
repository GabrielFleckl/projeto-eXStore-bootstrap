window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector("#navbarChangeColor").classList.add("background__navbar","rounded-5","navbar__transition");
  } else {
    document.querySelector("#navbarChangeColor").classList.remove("background__navbar",);
  }
}

scrollFunction()
