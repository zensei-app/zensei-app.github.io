$(window).scroll(function () {
  const scrollTop = $(window).scrollTop();
  const PERCENTAGE_CONTENT_LANDING = 0.86;
  if (scrollTop >= PERCENTAGE_CONTENT_LANDING * window.innerHeight) {
    $("body").addClass("fixed");
    $("#press").addClass("invisible");
    $("header").removeClass("invisible");
  } else {
    $("body").removeClass("fixed");
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
  $("#go-to-storytelling").click(function () {
    const storytellingOffset = $("#storytelling").offset().top;
    $("body,html").animate(
      {
        scrollTop: storytellingOffset,
      },
      2000
    );
  });
});
