$(window).scroll(function () {
  if ($(window).scrollTop() >= window.innerHeight) {
    $("body").addClass("fixed");
    $("footer").addClass("invisible");
  } else {
    $("body").removeClass("fixed");
    $("footer").removeClass("invisible");
  }

  //esto no funciona
  //Querría que el header no fuera visible hasta que se haya pasado a la segunda pantalla (slide1)
  //también probé con window.pageYOffset
  if ($(window.scrollY) >= window.innerHeight) {
    $("header").addClass("invisible");
    console.log(window.scrollY);
  } else {
    $("header").removeClass("invisible");
  }
});
