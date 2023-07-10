$(".site-header__menu-btn").on("click", () => {
  $(".site-header__menu-btn").toggleClass("selected");

  if ($(".site-header__menu-btn").hasClass("selected")) {
    $(".site-header__menu-btn span:nth-child(1)").text("E");
    $(".site-header__menu-btn span:nth-child(2)").text("I");
    $(".site-header__menu-btn span:nth-child(3)").text("T");
  } else {
    $(".site-header__menu-btn span:nth-child(1)").text("M");
    $(".site-header__menu-btn span:nth-child(2)").text("N");
    $(".site-header__menu-btn span:nth-child(3)").text("U");
  }

  $(".site-header__nav").toggleClass("show");
});

$(".site-header__sub-menu-title")
  .off("click")
  .on("click", function () {
    const arrow = $(this).find("svg");
    console.log(arrow);
    $(".bi").not(arrow).removeClass("rotated");
    arrow.toggleClass("rotated");

    const subMenu = $(this).next(".site-header__sub-menu");
    $(".site-header__sub-menu").not(subMenu).slideUp("fast");
    subMenu.slideToggle("fast");
  });
