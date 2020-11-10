$(document).ready(function () {
  $(".animated").typed({
    strings: [
      "We offer the best service...",
      "We have the best plan prices",
      "We are trustworthy!",
      "With us you are in safe hands!",
    ],

    stringsElement: null,

    typeSpeed: 0,

    startDelay: 400,

    backSpeed: 500,

    shuffle: true,

    backDelay: 500,

    fadeOut: true,

    fadeOutClass: "typed-fade-out",

    fadeOutDelay: 500, // milliseconds

    loop: true,

    loopCount: false,

    showCursor: true,

    cursorChar: "",

    attr: null,

    contentType: "html",
  });

  /*this for adding class active to links */
  $(".navbar .nav-item .nav-link").click(function () {
    $("this").addClass("active-li").siblings().removeClass("active-li");
  });

  /*this for scroll button to top*/
  $(window).on("scroll", function () {
    if (Math.round($(window).scrollTop()) >= 20) {
      $("nav").addClass("scroll");
    } else {
      $("nav").removeClass("scroll");
    }
  });

  /*this for scrolling all nav li*/
  $("nav ul li:nth-of-type(1)").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("header").offset().top,
      },
      1500
    );
  });

  $(".navbar li.nav-item.butt .lang").click(function () {
    $(".navbar li.nav-item.butt a").toggleClass("toggle-fad");
    $(".navbar").toggleClass("show");
  });
});

//this for page louding  when started or relouded
$(window).on("load", function () {
  $(".main-load").fadeOut(1000);
  $(".spinner").fadeOut(1000);
  $("body").css("overflow", "auto");
});

//end all js style
