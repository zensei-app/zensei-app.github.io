$(() => {
  const menu = $("#menu-ctn"),
    bars = $(".menu-bars"),
    items = $(".menu-item"),
    content = $("#menu-cnt");
<<<<<<< HEAD
=======
  body = $(".nav-header--main");
>>>>>>> b90bf7979480824f6674dc4682a6a869fa9f1450

  let firstClick = true,
    menuClosed = true;

  let handleMenu = (event) => {
    if (!firstClick) {
      bars.toggleClass("crossed hamburger");
    } else {
      bars.addClass("crossed");
      firstClick = false;
    }

    menuClosed = !menuClosed;
    content.toggleClass("dropped");
<<<<<<< HEAD
=======

    if (!menuClosed) {
      body.addClass("window-overlay");
    } else {
      body.removeClass("window-overlay");
    }

>>>>>>> b90bf7979480824f6674dc4682a6a869fa9f1450
    event.stopPropagation();
  };

  menu.on("click", (event) => {
    handleMenu(event);
  });

  $("body")
    .not("#menu-cnt, #menu-ctn")
    .on("click", (event) => {
      if (!menuClosed) handleMenu(event);
    });

  $("#menu-cnt, #menu-ctn").on("click", (event) => event.stopPropagation());
});
