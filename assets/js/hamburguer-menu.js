$(() => {
  const menu = $("#menu-ctn"),
    bars = $(".menu-bars"),
    items = $(".menu-item"),
    content = $("#menu-cnt");
  overlay = $(".apply-overlay");

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

    if (!menuClosed) {
      overlay.addClass("window-overlay");
    } else {
      overlay.removeClass("window-overlay");
    }

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
