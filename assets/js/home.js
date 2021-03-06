let hasBeenScrolled = false;

$(window).scroll(function () {
  hasBeenScrolled = true;
  const scrollTop = $(window).scrollTop();
  const PERCENTAGE_CONTENT_LANDING = 0.86;
  if (scrollTop >= PERCENTAGE_CONTENT_LANDING * window.innerHeight) {
    $("#press").addClass("invisible");
    $("header").removeClass("invisible");
  } else {
    $("#press").removeClass("invisible");
    $("header").addClass("invisible");
  }

  $("#press").css({
    opacity: function () {
      const elementHeight = $(this).height();
      const opacity =
        1 - scrollTop / (PERCENTAGE_CONTENT_LANDING * window.innerHeight);
      return opacity;
    },
  });
});

$(document).ready(function () {
  if (!hasBeenScrolled) {
    $("header").addClass("invisible");
  }

  //https://kenwheeler.github.io/slick/
  $(".carousel-responsive").slick({
    accesibility: true,
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  //https://kenwheeler.github.io/slick/
  $(".opinion-carousel-responsive").slick({
    accesibility: true,
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  //drop-down in slide4
  $("#open-drop-down").click(function () {
    $("#open-drop-down-btn").addClass("invisible");
    $("#close-drop-down-btn").removeClass("invisible");
    $("#symptoms-list").removeClass("home--slide4__list1-closed");
  });

  $("#close-drop-down").click(function () {
    $("#close-drop-down-btn").addClass("invisible");
    $("#open-drop-down-btn").removeClass("invisible");
    $("#symptoms-list").addClass("home--slide4__list1-closed");
  });
});
