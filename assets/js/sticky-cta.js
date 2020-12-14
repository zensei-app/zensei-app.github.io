let hasBannerBeenClosed = false;

$(document).scroll(function () {
  var y = $(this).scrollTop();
  if (y > 2000 && !hasBannerBeenClosed) {
    $(".top-banner").slideDown();
  } else {
    $(".top-banner").slideUp();
  }
});

$("#closeTopBanner").on("click",function(){
  $(".top-banner").slideUp();
  hasBannerBeenClosed = true;
});
